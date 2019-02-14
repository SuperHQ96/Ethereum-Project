// This program is designed to reduce bad behaviours inside virtual games.
// If more than 75% of the players vote one particular player, he will be given
// punishment (token deduction or cancellation of account)
// Assumption: The game needs at least 4 players.

pragma solidity ^0.4.17;

contract GameInstanceFactory{
    address[] public deployedGameInstances;
    function createGameInstance() public payable {
        address newGameInstance = new GameInstance(msg.sender);
        deployedGameInstances.push(newGameInstance);
    }
    function getDeployedGameInstances() public view returns (address[]) {
        return deployedGameInstances;
    }
}

contract GameInstance{

    struct Player {
        bool voted;
        uint voteCount;
        bool penaltyImposed;
        bool penaltyPaid;
    }

    address public gameMaster;
    mapping (address => Player) public playerVotes;
    address[] players;
    address blacklist;   // holds the addresses of players with unpaid penalty
    mapping(address => bool) public pendingPlayersMapping;   //holds the addresses of players before the game starts
    address[] public pendingPlayers;
    bool gameStarted;
    uint imposedPenaltyValue;
    mapping(address => bool) public playersMapping;

    //event PenaltyImposed (string punishmentMsg, address indexed playerAddress);
    //event PenaltyPaid (string punishmentMsg, address indexed punishedPlayer, uint amountPaid);

    modifier isGameMaster () {
        require (msg.sender == gameMaster);
        _;
    }

    modifier enoughPlayers () {
        require (pendingPlayers.length >= 4 || players.length >=4);
        _;
    }

    function GameInstance (address creator) public payable {
        beGameMaster(creator);
        gameStarted = false;
        imposedPenaltyValue = 0;
    }

    function beGameMaster (address creator) public {
        require (gameMaster == address(0));
        /*if(gameMaster!=address(0))
            return;
        */
        gameMaster = creator;
    }

    function joinGame () public {
        if(pendingPlayersMapping[msg.sender]) {return;}
        pendingPlayersMapping[msg.sender] = true;
        pendingPlayers.push(msg.sender);
    }

    function getPendingPlayersCount () public view returns (uint){
        return pendingPlayers.length;
    }

    function getPlayersCount () public view returns (uint) {
        return players.length;
    }

    function getPlayers () public view returns (address[]){
        return players;
    }

    function getPendingPlayers() public view returns (address[]){
        return pendingPlayers;
    }

    function initialiseStatus () isGameMaster enoughPlayers public {
        players = pendingPlayers;
        for(uint j = 0; j < players.length; j++){
            playersMapping[players[j]] = true;
        }
        gameStarted = true;
    }

    // need a for loop to ask each player in 'players' to vote one person
    function reportPlayer (address playerReported) public {
        require(msg.sender!= playerReported);
        require(!playerVotes[msg.sender].voted);
        playerVotes[playerReported].voteCount ++;
        playerVotes[msg.sender].voted = true;
    }

    function hasPenalty (address player) enoughPlayers private view returns (bool) {
        uint threshold = players.length * 3/4 ;
        if(playerVotes[player].voteCount>=threshold){
            return true;
        }
        else return false;
    }

    function imposePenalty (address playerReported, uint imposedAmount) isGameMaster public {
        require (hasPenalty(playerReported));
        blacklist = playerReported;
        playerVotes[playerReported].penaltyImposed = true;
        //PenaltyImposed('The player has bad behaviour in the game', playerReported);
        imposedPenaltyValue = imposedAmount;
    }

    function getBlacklist() public view returns (address) {
        return blacklist;
    }

    function payPenalty () public payable {
        require (playerVotes[msg.sender].penaltyImposed == true && playerVotes[msg.sender].penaltyPaid == false);
        require(msg.value >= imposedPenaltyValue);
        playerVotes[msg.sender].penaltyPaid = true;
        // for (uint i=0; i<blacklist.length; i++){
        //     if (blacklist[i] == msg.sender){
        //         delete blacklist[i];
        //         break;
        //     }
        // }
        blacklist = address(0);
        //PenaltyPaid('Punishment for bad behaviour of player', msg.sender, msg.value);
        gameMaster.transfer(msg.value);
        imposedPenaltyValue = 0;
    }


    function resetStatus () isGameMaster public {
        require (hasPenalty(gameMaster) == false || playerVotes[gameMaster].penaltyPaid == true);
        // for (uint i=0; i<blacklist.length; i++){
        //     if (blacklist[i] != address(0))
        //         return;
        // }
        blacklist = address(0);
        if(gameStarted) {
            for (uint i = 0; i < players.length; i++) {
            playerVotes[players[i]].voted = false;
            playerVotes[players[i]].voteCount = 0;
            playerVotes[players[i]].penaltyImposed = false;
            playerVotes[players[i]].penaltyPaid = false;
            pendingPlayersMapping[players[i]] = false;
            playersMapping[players[i]] = false;
        }
        } else {
            for (i = 0; i < pendingPlayers.length; i++) {
                pendingPlayersMapping[pendingPlayers[i]] = false;
            }
        }

        players.length = 0;
        pendingPlayers.length = 0;
        //gameMaster = address(0);
        gameStarted = false;
        imposedPenaltyValue = 0;
    }

    function getGameInstanceSummary() public view returns (address, uint, uint, bool, uint) {
        return (gameMaster, players.length, pendingPlayers.length, gameStarted, imposedPenaltyValue);
    }
    function getPlayerSummary(address playerRequested) public view returns(bool, uint, bool, bool) {
        return (playerVotes[playerRequested].voted, playerVotes[playerRequested].voteCount, playerVotes[playerRequested].penaltyImposed, playerVotes[playerRequested].penaltyPaid);
    }
    function getCurrentAccountSummary(address currentAccount) public view returns(bool, bool, bool) {
        bool inGame;
        if(gameStarted) {
            inGame = playersMapping[currentAccount];
        } else {
            inGame = pendingPlayersMapping[currentAccount];
        }
        return(inGame, playerVotes[currentAccount].penaltyImposed, playerVotes[currentAccount].penaltyPaid);
    }
}

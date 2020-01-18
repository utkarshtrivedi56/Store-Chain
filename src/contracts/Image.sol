  pragma solidity ^0.5.12;

  contract Image {
    string imgHash;

    function set(string memory _imgHash) public {
      imgHash = _imgHash;
    }

    function get() public view returns (string memory) {
      return imgHash;
    }
  }

// 4 = Rinkeby testnetwork
// 3 = Ropstan testnetwork
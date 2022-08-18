/**
 * SPDX-License-Identifier:MIT
 */
pragma solidity 0.7.6;
import "@opengsn/contracts/src/BaseRelayRecipient.sol";

contract CaptureTheFlag is BaseRelayRecipient {
    constructor(address forwarder) {}

    event FlagCaptured(address previousHolder, address currentHolder);

    address public currentHolder = address(0);

    function captureTheFlag() external {
        address previousHolder = currentHolder;

        currentHolder = msg.sender;

        emit FlagCaptured(previousHolder, currentHolder);
    }

    function versionRecipient() external view override returns (string memory) {
        return "2.0.0";
    }
}

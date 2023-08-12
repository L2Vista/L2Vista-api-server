# L2Vista-api-server
In the expansive world of cross-chain protocols, L2Vista-api-server stands out as a pivotal solution. This isn't just an API—it's our answer to the fragmented web of Ethereum's layer2 transactions, weaving them into a unified narrative.

## Introduction
Navigating the myriad of cross-chain transactions can be daunting. Enter L2Vista: a unified platform distilling transactions from notable chains like Optimism, Base, Zora, and Mode. With support from The-Graph and Covalent, our API server specializes in tracking cross-chain protocols, including Hyperlane and Chainlink CCIP, with unparalleled accuracy.

## API Endpoints
### Transaction History API
Fetch the intricacies of every transaction:
```
/tx?amount=5&skip=0&tochain=420&hash=0xa82c95ceb3a44b5a2bf752af8f066c9a2a4a908860c98f3514161be596260d2d
```
Parameters:
- `amount` and `skip` are mandatory. They serve as guiding lights in this vast transactional ocean.
- Dive deeper with optional parameters like `formchain`, `tochain`, and `hash`.

### Transaction Count API
Quantifying the myriad transactions:
```
/tx?amount=5&skip=0&fromchain=999&tochain=420
```
- Optional parameters: `formchain`, `tochain`, and `hash`.

## Set Up Configuration:
1. **Review the `.example.env` file.**
2. **Create a `.env` file based on the example.** Adjust the values as 

For Linux or macOS:
```shell
cp .example.env .env
```
For Windows:
```shell
copy .example.env .env
```

## Quick Start Guide
1. **Install Dependencies:**
```shell
npm install
```

2. **Launch the Project:**
```shell
npm start
```

## Contributing
If you'd like to contribute to the project, please fork the repository, make your changes, and submit a pull request. We appreciate all contributions and feedback!
import { TonClient, signerKeys } from "@tonclient/core";
import { libNode } from "@tonclient/lib-node";

TonClient.useBinaryLibrary(libNode);

const client = new TonClient({
  network: {
    server_address: "https://testnet.toncenter.com/api/v2/jsonRPC", // TON Testnet
  },
});

const keys = signerKeys({
  public: process.env.PUBLIC_KEY, // Masukkan dari .env.local
  secret: process.env.SECRET_KEY, // Masukkan dari .env.local
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { score } = req.body;

    try {
      const response = await client.processing.process_message({
        message: await client.abi.encode_message({
          address: process.env.CONTRACT_ADDRESS, // Alamat kontrak Anda
          abi: { type: "Contract", value: require("../../utils/contract.abi.json") },
          call_set: {
            function_name: "mint",
            input: { to: process.env.USER_WALLET, amount: score },
          },
          signer: keys,
        }),
        send_events: false,
      });

      res.status(200).json({ message: "Reward sent!", response });
    } catch (error) {
      console.error("Reward error:", error);
      res.status(500).json({ message: "Reward failed", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

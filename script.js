const walletAddress = "0xC8BBb995bBEd8bF859a706bE0A5F78DdE53A292f";

const walletNode = document.querySelector("#walletAddress");
const copyButton = document.querySelector("#copyWallet");

walletNode.textContent = walletAddress;

copyButton.addEventListener("click", async () => {
  if (walletAddress.includes("等待填入")) {
    copyButton.textContent = "先填地址";
    window.setTimeout(() => {
      copyButton.textContent = "复制地址";
    }, 1400);
    return;
  }

  await navigator.clipboard.writeText(walletAddress);
  copyButton.textContent = "已复制";
  window.setTimeout(() => {
    copyButton.textContent = "复制地址";
  }, 1400);
});

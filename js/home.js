// History & Donation Tab Functionality
const historyTab = document.getElementById("btn-history");
const donationTab = document.getElementById("btn-donation");

// History

historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-lime-300", "font-semibold");
  historyTab.classList.remove("bg-white");
  donationTab.classList.remove("bg-lime-300", "font-semibold");
  donationTab.classList.add("text-gray-600");

  document.getElementById("donate-section").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

// Donation

donationTab.addEventListener("click", function () {
  donationTab.classList.add("bg-lime-300", "font-semibold");
  donationTab.classList.remove("text-gray-600");
  historyTab.classList.remove("bg-lime-300", "font-semibold");
  historyTab.classList.add("text-gray-600");

  document.getElementById("history-section").classList.add("hidden");
  document.getElementById("donate-section").classList.remove("hidden");
});

// Get donate collection button value function by ID
function getInputFieldValueById(id) {
  return parseFloat(document.getElementById(id).value);
}
// Get text-value function by ID
function getTextFieldValueById(id) {
  return parseFloat(document.getElementById(id).innerText);
}

// getting all the value
// Noakhali FLood Collection

const noakhaliDonateCollectButton = document
  .getElementById("btn-collect-donate-noakhali")
  .addEventListener("click", function () {
    const amountMain = document.getElementById("btn-main-amount").innerText;
    const mainAmount = parseFloat(amountMain);
    const collectDonationNoakhali = getInputFieldValueById(
      "input-amount-noakhali"
    );
    if (mainAmount >= collectDonationNoakhali && collectDonationNoakhali > 0) {
      const btnAmountNoakhali = getTextFieldValueById("amount-btn-noakhali");
      const cardFinalBalanceNoakhali =
        collectDonationNoakhali + btnAmountNoakhali;

      const currentAmount = mainAmount - collectDonationNoakhali;
      document.getElementById("btn-main-amount").innerText = currentAmount;

      document.getElementById("amount-btn-noakhali").innerText =
        cardFinalBalanceNoakhali;

      const p = document.createElement("p");
      p.innerText = `Donated Balance ${collectDonationNoakhali} for Flood at Noakhali`;
      document.getElementById("final-history").appendChild(p);
      p.classList.add("bg-lime-100", "p-4", "m-2");
    } else {
      alert("Insufficient Balance");
    }
  });

// Feni flood collection

const feniDonateCollectButton = document
  .getElementById("btn-collect-donate-feni")
  .addEventListener("click", function () {
    const amountMain = document.getElementById("btn-main-amount").innerText;
    const mainAmount = parseFloat(amountMain);
    const collectDonationFeni = getInputFieldValueById("input-amount-feni");

    if (mainAmount >= collectDonationFeni && collectDonationFeni > 0) {
      const btnAmountFeni = getTextFieldValueById("amount-btn-feni");
      const cardFinalBalanceFeni = collectDonationFeni + btnAmountFeni;
      const currentAmount = mainAmount - collectDonationFeni;
      document.getElementById("btn-main-amount").innerText = currentAmount;
      document.getElementById("amount-btn-feni").innerText =
        cardFinalBalanceFeni;

      const p = document.createElement("p");
      p.innerText = `Donated Balance ${collectDonationFeni} for Flood Relief in Feni`;
      document.getElementById("final-history").appendChild(p);
      p.classList.add("bg-lime-100", "p-4", "m-2");
    } else {
      alert("Insufficient Balance");
    }
  });

// Quota movement medical plan collection

const quotaDonateCollectButton = document
  .getElementById("btn-collect-donate-quota")
  .addEventListener("click", function () {
    const amountMain = document.getElementById("btn-main-amount").innerText;
    const mainAmount = parseFloat(amountMain);
    const collectDonationQuota = getInputFieldValueById("input-amount-quota");

    if (mainAmount >= collectDonationQuota && collectDonationQuota > 0) {
      const btnAmountQuota = getTextFieldValueById("amount-btn-quota");
      const cardFinalBalanceQuota = collectDonationQuota + btnAmountQuota;
      const currentAmount = mainAmount - collectDonationQuota;
      document.getElementById("btn-main-amount").innerText = currentAmount;
      document.getElementById("amount-btn-quota").innerText =
        cardFinalBalanceQuota;

      const p = document.createElement("p");
      p.innerText = `Donated Balance ${collectDonationQuota} Aid for Injured in the Quota Movement`;
      document.getElementById("final-history").appendChild(p);
      p.classList.add("bg-lime-100", "p-4", "m-2");
    } else {
      alert("Insufficient Balance");
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  const fields = {
    allLeads: document.getElementById("allLeads"),
    errorLeads: document.getElementById("errorLeads"),
    notValidLeads: document.getElementById("notValidLeads"),
    validLeads: document.getElementById("validLeads"),
    testLeads: document.getElementById("testLeads"),
    acquisitions: document.getElementById("acquisitions"),
    cr: document.getElementById("cr"),
    status1: document.getElementById("status1"),
    status2: document.getElementById("status2"),
    status3: document.getElementById("status3"),
    status4: document.getElementById("status4"),
    status5: document.getElementById("status5"),
    status6: document.getElementById("status6"),
    status7: document.getElementById("status7"),
    status8: document.getElementById("status8"),
    status9: document.getElementById("status9"),
    status10: document.getElementById("status10"),
    status11: document.getElementById("status11"),
    status12: document.getElementById("status12"),
    status13: document.getElementById("status13"),
    status14: document.getElementById("status14"),
    status15: document.getElementById("status15"),
    status16: document.getElementById("status16"),
    status17: document.getElementById("status17"),
    status18: document.getElementById("status18"),
    status19: document.getElementById("status19"),
    status20: document.getElementById("status20"),
    status21: document.getElementById("status21"),
    status22: document.getElementById("status22"),
    status23: document.getElementById("status23"),
    status24: document.getElementById("status24"),
    status25: document.getElementById("status25"),
    status26: document.getElementById("status26"),
    status27: document.getElementById("status27"),
    status28: document.getElementById("status28"),
    status29: document.getElementById("status29"),
    status30: document.getElementById("status30"),
    status31: document.getElementById("status31"),
    status32: document.getElementById("status32"),
    status33: document.getElementById("status33"),
    status34: document.getElementById("status34"),
    status35: document.getElementById("status35"),
    status36: document.getElementById("status36"),
    status37: document.getElementById("status37"),
    status38: document.getElementById("status38"),
    status39: document.getElementById("status39"),
    status40: document.getElementById("status40"),
    status41: document.getElementById("status41"),
    status42: document.getElementById("status42"),
    status43: document.getElementById("status43"),
    status44: document.getElementById("status44"),
    status45: document.getElementById("status45"),
    status46: document.getElementById("status46"),
    status47: document.getElementById("status47"),
    status48: document.getElementById("status48"),
  };

  const checkboxes = {
    autoAll: document.getElementById("autoAll"),
    autoCR: document.getElementById("autoCR"),
  };

  const updateCalculated = () => {
    if (checkboxes.autoAll.checked) {
      const sum = +fields.notValidLeads.value + +fields.validLeads.value;
      fields.allLeads.value = sum;
      fields.allLeads.disabled = true;
    } else {
      fields.allLeads.disabled = false;
    }

    if (checkboxes.autoCR.checked) {
      const valid = +fields.validLeads.value;
      const acqui = +fields.acquisitions.value;
      const cr = valid ? (acqui / valid * 100).toFixed(2) : "0.00";
      fields.cr.value = cr;
      fields.cr.disabled = true;
    } else {
      fields.cr.disabled = false;
    }
  };

  Object.values(fields).forEach(field => {
    field.addEventListener("input", updateCalculated);
  });

  Object.values(checkboxes).forEach(ch => {
    ch.addEventListener("change", updateCalculated);
  });

  document.getElementById("sendText").addEventListener("click", async () => {
    const values = {
      allLeads: fields.allLeads.value,
      errorLeads: fields.errorLeads.value,
      notValidLeads: fields.notValidLeads.value,
      validLeads: fields.validLeads.value,
      testLeads: fields.testLeads.value,
      acquisitions: fields.acquisitions.value,
      cr: fields.cr.value,
      status1: fields.status1.value,
      status2: fields.status2.value,
      status3: fields.status3.value,
      status4: fields.status4.value,
      status5: fields.status5.value,
      status6: fields.status6.value,
      status7: fields.status7.value,
      status8: fields.status8.value,
      status9: fields.status9.value,
      status10: fields.status10.value,
      status11: fields.status11.value,
      status12: fields.status12.value,
      status13: fields.status13.value,
      status14: fields.status14.value,
      status15: fields.status15.value,
      status16: fields.status16.value,
      status17: fields.status17.value,
      status18: fields.status18.value,
      status19: fields.status19.value,
      status20: fields.status20.value,
      status21: fields.status21.value,
      status22: fields.status22.value,
      status23: fields.status23.value,
      status24: fields.status24.value,
      status25: fields.status25.value,
      status26: fields.status26.value,
      status27: fields.status27.value,
      status28: fields.status28.value,
      status29: fields.status29.value,
      status30: fields.status30.value,
      status31: fields.status31.value,
      status32: fields.status32.value,
      status33: fields.status33.value,
      status34: fields.status34.value,
      status35: fields.status35.value,
      status36: fields.status36.value,
      status37: fields.status37.value,
      status38: fields.status38.value,
      status39: fields.status39.value,
      status40: fields.status40.value,
      status41: fields.status41.value,
      status42: fields.status42.value,
      status43: fields.status43.value,
      status44: fields.status44.value,
      status45: fields.status45.value,
      status46: fields.status46.value,
      status47: fields.status47.value,
      status48: fields.status48.value
    };

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: injectTextToPage,
      args: [values]
    });
  });

  

  updateCalculated();
});

function injectTextToPage(values) {
  const selectors = {
    allLeads: "#vgt-table > tbody > tr > td > span > div.my-1.mx-1.grid.gap-x-1.min-\\[420px\\]\\:grid-cols-2.sm\\:grid-cols-3.md\\:grid-cols-4.xl\\:grid-cols-7.justify-center > span:nth-child(1) > div > span",
    errorLeads: "#vgt-table > tbody > tr > td > span > div.my-1.mx-1.grid.gap-x-1.min-\\[420px\\]\\:grid-cols-2.sm\\:grid-cols-3.md\\:grid-cols-4.xl\\:grid-cols-7.justify-center > span:nth-child(2) > div > span",
    notValidLeads: "#vgt-table > tbody > tr > td > span > div.my-1.mx-1.grid.gap-x-1.min-\\[420px\\]\\:grid-cols-2.sm\\:grid-cols-3.md\\:grid-cols-4.xl\\:grid-cols-7.justify-center > span:nth-child(3) > div > span",
    validLeads: "#vgt-table > tbody > tr > td > span > div.my-1.mx-1.grid.gap-x-1.min-\\[420px\\]\\:grid-cols-2.sm\\:grid-cols-3.md\\:grid-cols-4.xl\\:grid-cols-7.justify-center > span:nth-child(4) > div > span",
    testLeads: "#vgt-table > tbody > tr > td > span > div.my-1.mx-1.grid.gap-x-1.min-\\[420px\\]\\:grid-cols-2.sm\\:grid-cols-3.md\\:grid-cols-4.xl\\:grid-cols-7.justify-center > span:nth-child(5) > div > span",
    acquisitions: "#vgt-table > tbody > tr > td > span > div.my-1.mx-1.grid.gap-x-1.min-\\[420px\\]\\:grid-cols-2.sm\\:grid-cols-3.md\\:grid-cols-4.xl\\:grid-cols-7.justify-center > span:nth-child(6) > div > span",
    cr: "#vgt-table > tbody > tr > td > span > div.my-1.mx-1.grid.gap-x-1.min-\\[420px\\]\\:grid-cols-2.sm\\:grid-cols-3.md\\:grid-cols-4.xl\\:grid-cols-7.justify-center > span:nth-child(7) > div > span",
    status1: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(2) > div > div > div > div > span:nth-child(2)',
    status2: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(2) > div > div > div > div > span:nth-child(3)',
    status3: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(2) > div > div > div > div > span:nth-child(4)',
    status4: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(3) > div > div > div > div > span:nth-child(2)',
    status5: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(3) > div > div > div > div > span:nth-child(3)',
    status6: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(3) > div > div > div > div > span:nth-child(4)',
    status7: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > span:nth-child(2)',
    status8: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > span:nth-child(3)',
    status9: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > span:nth-child(4)',
    status10: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(5) > div > div > div > div > span:nth-child(2)',
    status11: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(5) > div > div > div > div > span:nth-child(3)',
    status12: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(5) > div > div > div > div > span:nth-child(4)',
    status13: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(6) > div > div > div > div > span:nth-child(2)',
    status14: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(6) > div > div > div > div > span:nth-child(3)',
    status15: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(6) > div > div > div > div > span:nth-child(4)',
    status16: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(7) > div > div > div > div > span:nth-child(2)',
    status17: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(7) > div > div > div > div > span:nth-child(3)',
    status18: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(7) > div > div > div > div > span:nth-child(4)',
    status19: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(8) > div > div > div > div > span:nth-child(2)',
    status20: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(8) > div > div > div > div > span:nth-child(3)',
    status21: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(8) > div > div > div > div > span:nth-child(4)',
    status22: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(9) > div > div > div > div > span:nth-child(2)',
    status23: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(9) > div > div > div > div > span:nth-child(3)',
    status24: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(9) > div > div > div > div > span:nth-child(4)',
    status25: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(10) > div > div > div > div > span:nth-child(2)',
    status26: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(10) > div > div > div > div > span:nth-child(3)',
    status27: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(10) > div > div > div > div > span:nth-child(4)',
    status28: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(11) > div > div > div > div > span:nth-child(2)',
    status29: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(11) > div > div > div > div > span:nth-child(3)',
    status30: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(11) > div > div > div > div > span:nth-child(4)',
    status31: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(12) > div > div > div > div > span:nth-child(2)',
    status32: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(12) > div > div > div > div > span:nth-child(3)',
    status33: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(12) > div > div > div > div > span:nth-child(4)',
    status34: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(13) > div > div > div > div > span:nth-child(2)',
    status35: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(13) > div > div > div > div > span:nth-child(3)',
    status36: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(13) > div > div > div > div > span:nth-child(4)',
    status37: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(14) > div > div > div > div > span:nth-child(2)',
    status38: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(14) > div > div > div > div > span:nth-child(3)',
    status39: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(14) > div > div > div > div > span:nth-child(4)',
    status40: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(15) > div > div > div > div > span:nth-child(2)',
    status41: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(15) > div > div > div > div > span:nth-child(3)',
    status42: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(15) > div > div > div > div > span:nth-child(4)',
    status43: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(16) > div > div > div > div > span:nth-child(2)',
    status44: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(16) > div > div > div > div > span:nth-child(3)',
    status45: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(16) > div > div > div > div > span:nth-child(4)',
    status46: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(17) > div > div > div > div > span:nth-child(2)',
    status47: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(17) > div > div > div > div > span:nth-child(3)',
    status48: '#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(17) > div > div > div > div > span:nth-child(4)',
  };
  //*[@id="vgt-table"]/tbody/tr/td/span/div[2]/div/div[2]
  //*[@id="vgt-table"]/tbody/tr/td/span/div[2]/div/div[5]


  for (const key in selectors) {
    const el = document.querySelector(selectors[key]);
    if (el) el.textContent = values[key];
  }
}

document.getElementById('add-statuses').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: insertStatusesBlock
    });
  });
});

function insertStatusesBlock() {
  const target = document.evaluate(
    '//*[@id="vgt-table"]/tbody/tr/td/span/div[1]',
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;

  if (!target) {
    alert("Элемент не найден");
    return;
  }

  const html = `
<div class="overflow-x-auto xxxstatus">
  <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] ml-auto mr-auto border-0">
    <div class="card-body flex flex-col py-2 mt-2 text-sm bg-slate-500 dark:bg-slate-700 dark:bg-opacity-90 bg-opacity-40 text-slate-900 dark:text-slate-200">
      <div class="card-text h-full">
        <div class="font-bold grid grid-cols-4 items-center text-center">
          <span></span><span> Status </span><span> Percent </span><span> Total </span>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">Invalid statuses</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">New</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">Duplicate</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">FTD</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">Call back</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">Wrong info</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">No answer</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">Wrong_Language</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">Wrong_Number</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">Not Interested</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">Nomoney</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">Potential low</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">Wrong_Person</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">Hung Up</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">Never registrated</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="card rounded-md bg-white dark:bg-slate-800 lg:h-full border border-gray-200 dark:border-slate-700 shadow-base max-w-3xl min-w-[500px] shadow-none ml-auto mr-auto border-0">
      <div class="card-body flex flex-col py-2 text-sm bg-slate-100 dark:bg-slate-700 dark:bg-opacity-40 text-slate-900 dark:text-slate-300">
        <div class="card-text h-full">
          <div class="grid grid-cols-4 items-center text-center">
            <span class="ml-4 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 8.25l-7.5 7.5l-7.5-7.5"></path></svg>
            </span>
            <span class="break-all">Potential</span>
            <span>0.00%</span>
            <span>0</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>
  `;

  const container = document.createElement('div');
  container.innerHTML = html;
  target.parentNode.insertBefore(container, target.nextSibling);
}
document.getElementById('hideElement').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: hideOverflowElements
    });
  });
});

function hideOverflowElements() {
  const elements = document.querySelectorAll('.overflow-x-auto');
  elements.forEach(el => {
    el.style.display = 'none';
  });
}



/* const checkbox = document.getElementById("hideStatusesCheckbox1");
if (checkbox) {
  checkbox.addEventListener("change", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: (isChecked) => {
        const el = document.querySelector("#vgt-table > tbody > tr > td > span > div:nth-child(2) > div > div:nth-child(2)");
        if (el) {
          el.style.display = isChecked ? "none" : "block";
        } else {
          console.warn("Элемент не найден");
        }
      },
      args: [checkbox.checked]
    });
  });
} */

  // Функция для обработки изменения состояния чекбоксов
const handleCheckboxChange = (checkboxId, elementSelector) => {
  const checkbox = document.getElementById(checkboxId);
  if (checkbox) {
    checkbox.addEventListener("change", async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: (isChecked, selector) => {
          const el = document.querySelector(selector);
          if (el) {
            el.style.display = isChecked ? "none" : "block";
            // el.style.display = isChecked ? "block" : "none";
          } else {
            console.warn("Элемент не найден", selector);
          }
        },
        args: [checkbox.checked, elementSelector]
      });
    });
  }
};

// Для каждого чекбокса вызываем функцию с соответствующими параметрами
handleCheckboxChange("hideStatusesCheckbox1", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(2)");
handleCheckboxChange("hideStatusesCheckbox2", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(3)");
handleCheckboxChange("hideStatusesCheckbox3", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(4)");
handleCheckboxChange("hideStatusesCheckbox4", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(5)");
handleCheckboxChange("hideStatusesCheckbox5", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(6)");
handleCheckboxChange("hideStatusesCheckbox6", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(7)");
handleCheckboxChange("hideStatusesCheckbox7", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(8)");
handleCheckboxChange("hideStatusesCheckbox8", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(9)");
handleCheckboxChange("hideStatusesCheckbox9", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(10)");
handleCheckboxChange("hideStatusesCheckbox10", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(11)");
handleCheckboxChange("hideStatusesCheckbox11", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(12)");
handleCheckboxChange("hideStatusesCheckbox12", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(13)");
handleCheckboxChange("hideStatusesCheckbox13", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(14)");
handleCheckboxChange("hideStatusesCheckbox14", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(15)");
handleCheckboxChange("hideStatusesCheckbox15", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(16)");
handleCheckboxChange("hideStatusesCheckbox16", "#vgt-table > tbody > tr:nth-child(1) > td > span > div:nth-child(2) > div > div:nth-child(17)");

//*[@id="vgt-table"]/tbody/tr/td/span/div[2]/div/div[2]
//*[@id="vgt-table"]/tbody/tr/td/span/div[2]/div/div[3]

document.addEventListener("DOMContentLoaded", () => {
  const openWindowButton = document.getElementById("openWindow");
  if (openWindowButton) {
    openWindowButton.addEventListener("click", () => {
      chrome.windows.create({
        url: chrome.runtime.getURL("popup.html"),
        type: "popup",
        width: 400,
        height: 600
      });
    });
  }
});



const xrpl = require("xrpl");

document.getElementById("getamminfo").onclick = () => {
  main();
};
async function main() {
  const client = new xrpl.Client("wss://xrplcluster.com/");
  await client.connect();

  // Check if AMM already exists ----------------------------------------------
  const amm_info_request = {
    command: "amm_info",
    asset: {
      currency: step1field.value,
      issuer: step2field.value,
    },
    asset2: {
      currency: step3field.value,
      issuer: step4field.value,
    },
    ledger_index: "validated",
  };
  try {
    const amm_info_result = await client.request(amm_info_request);
    console.log(amm_info_result);
    const lp_token = amm_info_result.result.amm.lp_token;
    const amount = amm_info_result.result.amm.amount;
    const amount2 = amm_info_result.result.amm.amount2;
    console.log(`The AMM account ${lp_token.issuer} has ${lp_token.value} total
               LP tokens outstanding, and uses the currency code ${lp_token.currency}.`);
    console.log(`In its pool, the AMM holds ${amount.value} ${amount.currency} issued by ${amount.issuer}
               and ${amount2.value} ${amount2.currency} issued by ${amount2.issuer}`);

    //document.getElementById("getamminforesult").value = amm_info_result.result;
    document.getElementById(
      "getamminforesult"
    ).value = `The AMM account ${lp_token.issuer} \nhas ${lp_token.value} LP tokens and uses the currency \ncode ${lp_token.currency}. \nIn its pool, the AMM holds ${amount.value} of the ${amount.currency} token issued by \n${amount.issuer} and \n${amount2.value} of the ${amount2.currency} token issued by ${amount2.issuer}`;
  } catch (err) {
    if (err.data.error === "actNotFound") {
      console.log(
        `No AMM exists yet for the pair (This is probably as expected.)`
      );
      document.getElementById(
        "getamminforesult").value = `No AMM exists yet for the pair (This is probably as expected.)`;
    } else {
      throw err;
    }
    // await client.disconnect();
  }
 client.disconnect();
 document.getElementById("clear1").onclick = () => {
  window.location.reload();
  };
}
main();


document.getElementById("getammXRPinfo").onclick = () => {
  main3();
};
async function main3() {
  const client = new xrpl.Client("wss://xrplcluster.com/");
  await client.connect();

  // Check if AMM already exists ----------------------------------------------
  const amm_info_request = {
    command: "amm_info",
    asset: {
      currency: "XRP",
    },
    asset2: {
      currency: xrp5.value,
      issuer: xrp7.value,
    },
    ledger_index: "validated",      
  }
  try {{
    const amm_info_result = await client.request(amm_info_request);
    console.log(amm_info_result);
    const lp_token = amm_info_result.result.amm.lp_token;
    const amount = amm_info_result.result.amm.amount;
    const amount2 = amm_info_result.result.amm.amount2;
  }

  const amm_info_request2 = {
      command: "account_info",
      account: xrp3.value,
      ledger_index: "validated",
    }
    try {
      const amm_info_result2 = await client.request(amm_info_request2);
      console.log(amm_info_result2);
      const balance = amm_info_result2.result.account_data.Balance;    

    //document.getElementById("getamminforesult").value = amm_info_result.result;
    document.getElementById(
      "getammXRPinforesult"
    ).value = `The AMM account ${lp_token.issuer} \nhas ${lp_token.value} LP tokens and uses the currency \ncode ${lp_token.currency}. \nIn its pool, the AMM holds ${balance/1000000} XRP and \n${amount2.value} of the ${amount2.currency} token \nissued by ${amount2.issuer}`;
    document.getElementById("clear3").onclick = () => {
      window.location.reload();
    };
  }} catch (err) {
    if (err.data.error === "actNotFound") {
      console.log(
        `No AMM exists yet for the pair (This is probably as expected.)`
      );
      document.getElementById(
        "getammXRPinforesult").value = `No AMM exists yet for the pair (This is probably as expected.)`
    } else {
      throw err;
    }
  
    client.disconnect();
    document.getElementById("clear3").onclick = () => {
      window.location.reload();
    };
  }}
main3();



document.getElementById("lines2").onclick = () => {
  main2();
};
async function main2() {
  const client = new xrpl.Client("wss://xrplcluster.com/");
  await client.connect();

  let lines = [];

  const account_lines_result = {
    command: "account_lines",
    account: lines1field.value,
    limit: 200,
    // Tip: To look up only the new AMM's LP Tokens, uncomment:
    // "peer": lp_token.issuer,
    ledger_index: "validated",
  };
  
  let trustlineResponse = await client.request(account_lines_result);
  
  console.log(trustlineResponse.result.lines);
  document.getElementById("lines2field").value = JSON.stringify(trustlineResponse.result.lines,
    null,
    2
  );

  if (trustlineResponse?.result?.lines) {
    lines = lines.concat(trustlineResponse?.result?.lines);

    //check for marker
    let i = 0;
    if (trustlineResponse.result.marker) {
      while (trustlineResponse.result.marker) {
        account_lines_result.marker = trustlineResponse.result.marker;
        account_lines_result.ledger_index =
          trustlineResponse.result.ledger_index;

        console.log("additional calls: " + ++i);

        trustlineResponse = await client.request(account_lines_result);

        if (trustlineResponse?.result?.lines) {
          lines = lines.concat(trustlineResponse?.result?.lines);
        }
        console.log(lines);
        //document.getElementById("resultField").value = lines.balance;
        document.getElementById("lines2field").value = JSON.stringify(lines,
          null,
          2
        );
      }
    }
  }
  
  client.disconnect();
  document.getElementById("clear2").onclick = () => {
  window.location.reload();
  };
}
main2();


document.getElementById("step20").onclick = () => {
  main10();
};
async function main10() {
  const client = new xrpl.Client("wss://xrplcluster.com/");
  await client.connect();

  // Check if AMM already exists ----------------------------------------------
  const amm_info_request = {
    command: "amm_info",
    asset: {
      currency: step11.value,
      issuer: step13.value,
    },
    asset2: {
      currency: step15.value,
      issuer: step17.value,
    },
    ledger_index: step19.value,
  };
  try {
    const amm_info_result = await client.request(amm_info_request);
    console.log(amm_info_result);
    const lp_token = amm_info_result.result.amm.lp_token;
    const amount = amm_info_result.result.amm.amount;
    const amount2 = amm_info_result.result.amm.amount2;
    console.log(`The AMM account ${lp_token.issuer} had ${lp_token.value} total
               LP tokens outstanding, and used the currency code ${lp_token.currency}.`);
    console.log(`In its pool, the AMM had ${amount.value} ${amount.currency} issued by ${amount.issuer}
               and ${amount2.value} ${amount2.currency} issued by ${amount2.issuer}`);

    //document.getElementById("getamminforesult").value = amm_info_result.result;
    document.getElementById(
      "step21"
    ).value = `In the specified ledger index the AMM account ${lp_token.issuer} \nhad ${lp_token.value} LP tokens, currency \ncode ${lp_token.currency}. \nIn its pool, the AMM had ${amount.value} of the ${amount.currency} token issued by ${amount.issuer} and \n${amount2.value} of the ${amount2.currency} token issued by ${amount2.issuer}`;
  } catch (err) {
    if (err.data.error === "actNotFound") {
      console.log(
        `No AMM exists yet for the pair (This is probably as expected.)`
      );
      document.getElementById(
        "step21").value = `No AMM exists yet for the pair (This is probably as expected.)`;
    } else {
      throw err;
    }
    // await client.disconnect();
  }
 client.disconnect();
 document.getElementById("clear4").onclick = () => {
  window.location.reload();
  };
}
main100();

document.getElementById("step110").onclick = () => {
  main100();
};
async function main100() {
  const client = new xrpl.Client("wss://xrplcluster.com/");
  await client.connect();

  // Check if AMM already exists ----------------------------------------------
  const amm_info_request = {
    command: "amm_info",
    asset: {
      currency: "XRP",
    },
    asset2: {
      currency: step105.value,
      issuer: step107.value,
    },
    ledger_index: step109.value,      
  }
  try {{
    const amm_info_result = await client.request(amm_info_request);
    console.log(amm_info_result);
    const lp_token = amm_info_result.result.amm.lp_token;
    const amount = amm_info_result.result.amm.amount;
    const amount2 = amm_info_result.result.amm.amount2;
  }

  const amm_info_request2 = {
      command: "account_info",
      account: step103.value,
      ledger_index: step109.value,
    }
    try {
      const amm_info_result2 = await client.request(amm_info_request2);
      console.log(amm_info_result2);
      const balance = amm_info_result2.result.account_data.Balance;    

    //document.getElementById("getamminforesult").value = amm_info_result.result;
    document.getElementById(
      "step111"
    ).value = `In the specified ledger index the AMM account ${lp_token.issuer} \nhad ${lp_token.value} LP tokens, currency \ncode ${lp_token.currency}. \nIn its pool, the AMM had ${balance/1000000} XRP and \n${amount2.value} of the ${amount2.currency} token issued by ${amount2.issuer}`;
    document.getElementById("clear5").onclick = () => {
      window.location.reload();
    };
  }} catch (err) {
    if (err.data.error === "actNotFound") {
      console.log(
        `No AMM exists yet for the pair (This is probably as expected.)`
      );
      document.getElementById(
        "step111").value = `No AMM exists yet for the pair (This is probably as expected.)`
    } else {
      throw err;
    }
  
    client.disconnect();
    document.getElementById("clear5").onclick = () => {
      window.location.reload();
    };
  }}
main100();



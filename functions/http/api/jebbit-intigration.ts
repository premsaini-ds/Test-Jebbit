import axios from "axios";

export default async function jebbitIntigration(request:functionArgument):Promise<returnValue> {
  
  const { pathParams, queryParams, site,body,headers } = request;

  console.log("pathParams",pathParams);
  console.log("queryParams",queryParams);
  console.log("body",body);
  console.log("headers",headers);
  console.log("site",site);
  
  try {

    const data = await axios.post('http://yextproducts.24livehost.com/pub/livenation/logserver.php', {body}, {
      headers: headers,
      }).then((response) => {
         console.log(response);
      });

  
      // let content = queryParams;
      // // const header = new Headers({ "content-type": "application/json","yext-data" : headers});
      // const header = new Headers(headers);

      // const res = await fetch("http://yextproducts.24livehost.com/pub/livenation/logserver.php?TEST=123", {
      //   method: "POST",
      //   headers:header,
      //   body: JSON.stringify(content),
      // });

      // let response = await res.json();

      let response = data;

      return {
        body: "Calling API" + JSON.stringify(response),
        headers: {},
        statusCode: 200
      };
  }
  catch (error) {
    console.error('Failed to fetch product API:', error);
    throw error;
  }
             
}



interface functionArgument {
  /** Object containing each query parameter as  */
  queryParams: { [key: string]: string},
  body:{ [key: string]: string},
  headers:{ [key: string]: any},
  /** Internal ID of the site branch. */
  pathParams: { [key: string]: string | RequestInfo | URL},

  /** Site object containing all deploy-related information. */
  site: Site
}

interface Site {
  /** Internal ID of the site branch. */
  branchId: string,

  /** Internal ID of the Yext account. */
  businessId: string,

  /** Display name of the Yext account. */
  businessName: string,

  /** The Git commit hash associated with the deploy. */
  commitHash: string,

  /** The Git commit message associated with the deploy. */
  commitMessage: string,

  /** Internal ID for the deploy. */
  deployId: string,

  /** The "base URL" used for reverse proxying, as specified in serving.json. */
  displayUrlPrefix: string,

  /** Environment in which a request is invoked. */
  invocationContext: 'local' | 'preview' | 'staging' | 'production' | null;

  /** External ID of the Yext account. */
  partnerId: string,

  /** URL of the deploy in the Yext platform. */
  platformUrl: string,

  /** URL of preview domain associated with the deploy. */
  previewDomain: string,

  /** URL of production domain associated with the deploy. */
  productionDomain: string,

  /** Name of the GitHub branch associated with the deploy. */
  repoBranchName: string,

  /** URL of the GitHub branch associated with the site. */
  repoBranchUrl: string,

  /** URL of the GitHub repo associated with the site. */
  repoUrl: string,

  /** Internal ID of the site. */
  siteId: string,

  /** Display name of the site. */
  siteName: string,

  /** URL of staging domain associated with the deploy. */
  stagingDomain: string,

  /** Universe of the Yext account. */
  yextUniverse: "development" | "qa" | "sandbox" | "production" | null;
}

interface returnValue {
  /** HTTP response body (refer to MDN Web Docs). */
  body: string,

  /** HTTP response status code (refer to MDN Web Docs). */
  statusCode: number,

  /** HTTP response headers (refer to MDN Web Docs).  */
  headers: object
}
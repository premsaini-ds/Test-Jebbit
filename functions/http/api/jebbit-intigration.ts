async function callAPI(url:string)
{
  const myHeaders: Headers = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Access-Control-Allow-Origin', '*');
  myHeaders.append('Access-Control-Expose-Headers', '*'); 
  myHeaders.append('Access-Control-Allow-Headers', '*'); 
  myHeaders.append('Access-Control-Allow-Methods', '*'); 

  const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            redirect: 'follow',
            mode: 'cors',
        };

const response = await fetch(url, requestOptions)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
              throw new Error("Something went wrong on API server!");
          }
        });
        return response;
}

export default async function jebbitIntigration():Promise<returnValue> {
              try {
                      const hitapisUrl = await callAPI("http://yextproducts.24livehost.com/pub/livenation/logserver.php");
                        // const apiData = JSON.stringify(hitapisUrl);
                        // console.log("date",hitapisUrl);
                      return {
                        body: "Calling API",
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
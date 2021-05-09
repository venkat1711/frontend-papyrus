import { API } from '../../config';

export const postContentToDB = (pagename, token, post) => {
    return fetch(`${API}/pagecontent/create/${pagename}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(post),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export const getPageContent=(pagename)=>{
    return fetch(
      `${API}/pagecontent/`+pagename,
      {
        method: 'GET'            
                
      }
    )
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
  };
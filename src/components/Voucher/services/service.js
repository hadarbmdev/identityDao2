
export const service = {
    getData,getCandidatesData
};

function getData() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },

    };

    return fetch('', requestOptions)
        .then(response => {
            if (!response.ok) {
                console.error("failed. error = "+response.statusText);
                return Promise.reject(response.statusText);
            }

            let jsonResponse = response.json();

            return jsonResponse;
        })
        .then(payload => {
            console.log("Response:"+payload);

            return payload;
        });
}

function getCandidatesData() {
   const candidates =
   [{
       id:1,
       proposalId:1987978,
       photo:"https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg",
       firstname:"Suzie",
       lastname:"Bar",
       ethOffering:0.5334,
       socialMedia:{
           facebook:"facebook.com",
           twitter:"twitter.com",
           linkedin:"linkedin.com",
           instagram:"instagram.com",
           github:"github.com"
       }
   
   
     },
     {
       id:2,
       proposalId:2435423534,
       photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0ODGnaKeoz3ffQi0jID50h294U7bAg_sbj8fIiGmqTOsyq0LHw",
       firstname:"Mark",
       lastname:"Boskowitz",
       ethOffering:500.534534,
       socialMedia:{
        facebook:"facebook.com",
        twitter:"twitter.com",
        linkedin:"linkedin.com",
        instagram:"instagram.com",
        github:"github.com"
    }
   
     },
     {
    
       id:3,
       proposalId:1232123,
       photo:"https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-background-constrast-solid.jpg",
       firstname:"Sibua",
       lastname:"Papao",
       ethOffering:54.534534,
       socialMedia:{
        facebook:"facebook.com",
        twitter:"twitter.com",
        linkedin:"linkedin.com",
        instagram:"instagram.com",
        github:"github.com"
    }
   
   
     }];
     
    return Promise.resolve(candidates)
}
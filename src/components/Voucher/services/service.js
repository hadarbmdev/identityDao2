
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
       photo:"https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg",
       firstname:"Suzie",
       lastname:"Bar",
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
       photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0ODGnaKeoz3ffQi0jID50h294U7bAg_sbj8fIiGmqTOsyq0LHw",
       firstname:"Mark",
       lastname:"Boskowitz",
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
       photo:"https://static.makeuseof.com/wp-content/uploads/2015/11/perfect-profile-picture-background-constrast-solid.jpg",
       firstname:"Sibua",
       lastname:"Papao",
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
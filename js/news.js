let coviddata = '';

fetch('https://nepalcorona.info/api/v1/news')
    .then(response => {
        return response.json()
    })
    .then(covid => {
        console.log(covid);


        var articles = covid.data;
        for (var i = 0; i < articles.length; i++) {

            //For News Title
            let title = document.createElement('h1');
            title.innerHTML = articles[i].title;
            title.style.paddingRight = '8px';
            title.style.fontSize = '22px';

            //For News Source
            let source = document.createElement('p')
            source.innerHTML = 'News Source: '+articles[i].source
            source.style.fontSize = '14px'

            //For News Summary
            let summary = document.createElement('a')
            summary.innerHTML = 'News Summary: '+ articles[i].summary +'.........'
            summary.style.fontSize = '18px'
            summary.href = articles[i].url;

            //Display Users Profile Image
            var profileImage = document.createElement('img')
            profileImage.src = articles[i].image_url;
            profileImage.style.height = '400px';
            profileImage.style.width = '720px';
            profileImage.style.marginRight = '10px';
            

            //Display date
            var date = document.createElement('p')
            date.innerHTML = 'News Created Time: '+ articles[i].created_at.substr(0, 10);


            //Merge usersData
            var merge = document.createElement('div')
            merge.appendChild(title);
            merge.appendChild(source);
            merge.appendChild(profileImage);
            merge.appendChild(date);
            merge.appendChild(summary);
            merge.style.padding = '10px';
            merge.style.alignItems = 'center';
            merge.style.width = '730px';
            merge.style.margin = '5px auto';
            merge.style.backgroundColor = '#faf4ff'
            document.body.appendChild(merge);
        }
    })
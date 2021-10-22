let linksSocialMedia = {
  github : "italomagno",
  youtube : "italomagno",
  facebook : "italo.magno.336/",
  instagram : "italomagno_",
  twitter : "italomagno_",
  }
  function changeSocialMediaLinks(){
    for(let li of socialLinks.children){
      const social = li.getAttribute("class")
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]} `
    }
  }
 

  changeSocialMediaLinks()


  function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${linksSocialMedia.github}`
    
    fetch(url)
    .then(response =>  response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      /*alert(linksSocialMedia.github)*/
    })


  


  }
 
  /*alert(linksSocialMedia.github)*/
  getGitHubProfileInfos()
  
  

 
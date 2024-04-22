function CvProjects (){
    const myProjects = ["BlueberriesBnB" , "something" , "something-else"];
    const stringLink = "/mini-pjts/"

    let myProjectsList = [];

    myProjects.forEach(myProject => {
        myProject = stringLink.concat(myProject)
        console.log(`pushing ${myProject}`)
        myProjectsList.push(myProject)
    })

    return console.log(myProjectsList)
}

CvProjects()

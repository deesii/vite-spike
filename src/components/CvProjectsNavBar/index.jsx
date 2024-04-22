import { Link } from "react-router-dom"

export default function CvProjects(){
    
    // const myProjects = ["BlueberriesBnB" , "something" , "something-else"];
    // const stringLink = "/cv-pjts/"

    // let myProjectsList = [];

    // myProjects.forEach(myProject => {
    //     myProject = stringLink.concat(myProject)
    //     // myProjectsList.push(<li><Link to={myProject}>{myProject}</Link></li> );
    //     myProjectsList.push(<li><p>{myProject}:{myProject}</p></li> );
    // })

    // return(
    //     <div>
    //         <ul>{myProjectsList}</ul>
    //     </div>
    // )

    return(
        <>
            <Link to="/cv-pjts/blueberriesbnb">BlueberriesBnB</Link>|
        </>
    );
}
import Notificationbar from "../components/notification/notificationbar.component";
import ProjectsList from "../components/project/project-list.component";


const HomePage = () => {
  return (
    <div>
        <Notificationbar />
        <ProjectsList/>
    </div>
  );
};

export default HomePage;
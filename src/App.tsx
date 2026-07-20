


import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/Arena/HomePage.tsx'
import Header from './components/Header'
import NotFoundPage from './Pages/NotFoundPage'

import LocationPage from './Pages/Arena/LocationPage.tsx'

import ProjectDetails from './Pages/Arena/ProjectDetails.tsx'
import Pavilion from './Towers/Tower3_Pavilion/Pavilion.tsx'

import MasterPlanPage from './Pages/Arena/MasterPlanPage.tsx';
import Floor_Pavilion from './Towers/Tower3_Pavilion/Floor_Pavilion.tsx'
import GalleryPage from './Pages/Arena/GalleryPage.tsx';
// import GalleryPage1 from './Pages/Arena/GalleryPage1.tsx';
import Unit_Pavilion from './Towers/Tower3_Pavilion/Unit_Pavilion.tsx'
import GrandStand from './Towers/Grandstand/GrandStand.tsx';
import Floor_Grandstand from './Towers/Grandstand/Floor_Grandstand.tsx';
import Unit_Grandstand from './Towers/Grandstand/Unit_Grandstand.tsx';
import Navbar from './components/Navbar.tsx'

import ProjectHighlight from './Pages/Arena/ProjectHighlights1.tsx';
import Arcadia from './Towers/Arcadia/Arcadia.tsx'
import Citatel from './Towers/Citatel/Citatel.tsx'
import GreenField from './Towers/GreenField/GreenField.tsx'
import Athletica from './Towers/Athletica/Athletica.tsx'
import Floor_Arcadia from './Towers/Arcadia/Floor_Arcadia.tsx'
import Unit_Arcadia from './Towers/Arcadia/Unit_Arcadia.tsx'
import Floor_Citatel from './Towers/Citatel/Floor_Citatel.tsx'
import Unit_Citatel from './Towers/Citatel/Unit_Citatel.tsx'
import Floor_Greenfield from './Towers/GreenField/Floor_Greenfield.tsx'
import Unit_Greenfield from './Towers/GreenField/Unit_Greenfield.tsx'
import EntrancePage from './Pages/EntrancePage'
import EntrancePageEbony from './Pages/Ebony/EntrancePageEbony.tsx'
import EntrancePageGoldenWillows from './Pages/GoldenWillows/EntrancePageGoldenWillows.tsx'
import ProjectHighlights_Gold from './Pages/GoldenWillows/ProjectHighlights_Gold.tsx'
import NabarGoldenWillows from './components/NavbarGoldenWillows.tsx'
import LocationPage_Gold from './Pages/GoldenWillows/LocationPage_Gold.tsx';
import ProjectStatus_Golden from './Pages/GoldenWillows/ProjectStatus_Golden.tsx'
import GalleryPageGolden from './Pages/GoldenWillows/GalleryPageGolden.tsx'
import GoldenWillowsLayout from './Pages/GoldenWillows/GoldenWillowsLayout.tsx'
import ProjectDetailsPage from './Pages/GoldenWillows/ProjectDetailsPage.tsx'
// import MainTowerPage from './Pages/GoldenWillows/Towers_Golden/MainTowerPage.tsx'
// import FloorPage from './Pages/GoldenWillows/Towers_Golden/FloorPage.tsx'
// import UnitPage from './Pages/GoldenWillows/Towers_Golden/UnitPage.tsx'     "/arena_grandstand",
import Unit_Athletica from './Towers/Athletica/Unit_Athletica.tsx'
import Floor_Athletica from './Towers/Athletica/Floor_Athletica.tsx'
import ClubHouse from './Pages/Club_House/ClubHouse.tsx';
import Arena_Walkthrough from './Pages/Arena/Arena_Walkthrough.tsx'
import Arena_Quality from './Pages/Arena/Arena_Quality.tsx'
import QualityTab from './Pages/QualityTab.tsx'
import Project_Status from './Pages/Arena/Project_Status.tsx'
import Location360 from './Pages/Arena/Location360.tsx'
import Stadia from './Towers/Stadia/Stadia.tsx'
import Floor_Stadia from './Towers/Stadia/Floor_Stadia.tsx'
import Unit_Stadia from './Towers/Stadia/Unit_Stadia.tsx'
import Olympus from './Towers/Olympus/Olympus.tsx'
import Floor_Olympus from './Towers/Olympus/Floor_olympus.tsx'
import Unit_Olympus from './Towers/Olympus/Unit_Olympus.tsx'
function App() {

  const location = useLocation();

  const hide = ["/"]
  const hideheader = hide.includes(location.pathname);


  const showNavbarPages = ["/arena", "/arena_projecthighlights",
     "/arena_location", "/arena_master-plan", "/arena_project_details",
    "/arena_pavilion",  "/arena_citatel", "/arena_arcadia", 
    "/arena_atheletica","/arena_greenfield","/arena_grandstand",];

  const shouldShowNavbar = showNavbarPages.includes(location.pathname);

  const showNavbarGoldenWillows = ["/goldenwillows", "/golden_projecthighlights", "/golden_location", "/project_status_golden","/projectdetails_golden"];

  const GoldenWillowsNav = showNavbarGoldenWillows.includes(location.pathname);

  return (
    <>
      {hideheader && <Header />}
      <Routes>
        <Route path="/" element={<EntrancePage />} />
        <Route path="/arena" element={<HomePage />} />
        <Route path="/arena_projecthighlights" element={<ProjectHighlight />} />
        <Route path="/arena_master-plan" element={<MasterPlanPage />} />
        <Route path="/arena_location" element={<LocationPage />} />
        <Route path="/arena_gallery" element={<GalleryPage />} />
        {/* <Route path="/arena_gallery" element={<GalleryPage />} /> */}
        <Route path="/360" element={<Location360/>}/>
        <Route path="/arena_project_details" element={<ProjectDetails />} />
        <Route path="/arena_walkthrough" element={<Arena_Walkthrough/>}/>
        <Route path="/arena_quality" element={<Arena_Quality />} />
        <Route path="/project_status" element={<Project_Status/>}/>
        <Route path="*" element={<NotFoundPage />} />



        <Route path="/arena_pavilion" element={<Pavilion />} />
        <Route path="/arena_floorpavilion/:id" element={<Floor_Pavilion />} />
        <Route path="/arena_unitpavilion/:id" element={<Unit_Pavilion />} />

        <Route path="/arena_grandstand" element={<GrandStand />} />
        <Route path="/arena_floorgrandstand/:id" element={<Floor_Grandstand />} />
        <Route path="/arena_unitgrandstand/:id" element={<Unit_Grandstand />} />

        


        <Route path="/arena_arcadia" element={<Arcadia />} />
        <Route path="/arena_floorarcadia/:id" element={<Floor_Arcadia />} />
        <Route path="/arena_unitarcadia/:id" element={<Unit_Arcadia />} />

        <Route path="/arena_citatel" element={<Citatel />} />
        <Route path="/arena_floorcitatel/:id" element={<Floor_Citatel />} />
        <Route path="/arena_unitcitatel/:id" element={<Unit_Citatel />} />

        <Route path="/arena_greenfield" element={<GreenField />} />
        <Route path="/arena_floorgreenfield/:id" element={<Floor_Greenfield />} />
        <Route path="/arena_unitgreenfield/:id" element={<Unit_Greenfield />} />

        <Route path="/arena_atheletica" element={<Athletica />} />
        <Route path="/arena_flooratheletica/:id" element={<Floor_Athletica/>}/>
        <Route path="/arena_unitatheletica/:id" element={<Unit_Athletica/>}/>

         <Route path="/arena_stadia" element={<Stadia />} />
        <Route path="/arena_floorstadia/:id" element={<Floor_Stadia/>}/>
        <Route path="/arena_unitstadia/:id" element={<Unit_Stadia/>}/>

        <Route path="/arena_olympus" element={<Olympus />} />
        <Route path="/arena_floorolympus/:id" element={<Floor_Olympus />} />
        <Route path="/arena_unitolympus/:id" element={<Unit_Olympus />} />




        {/* Ebony */}
        <Route path="/ebony" element={<EntrancePageEbony />} />

        {/* GoldenWillows */}
        <Route path="/goldenwillows" element={<EntrancePageGoldenWillows />} />
        <Route path="/golden_projecthighlights" element={<ProjectHighlights_Gold />} />
        <Route path="/golden_location" element={<LocationPage_Gold />} />
        <Route path="/project_status_golden" element={<ProjectStatus_Golden />} />
        <Route path="/gallery_golden" element={<GalleryPageGolden />} />
        <Route path="/goldenwillowslayout" element={<GoldenWillowsLayout />} />
        <Route path="/projectdetails_golden" element={<ProjectDetailsPage />} />
        {/* Towers */}
        {/* <Route path="/tower_goldenwillows/:towerId" element={<MainTowerPage />} /> */}
        {/* <Route path="/golden_floor/:id" element={<FloorPage />} /> */}
        {/* <Route path="/golden_unit/:id" element={<UnitPage />} /> */}

        {/* club-house */}
        <Route path="/club-house" element={<ClubHouse/>}/>

        <Route path="/quality" element={<QualityTab/>}/>


      </Routes>

      {shouldShowNavbar && <Navbar />}

      {GoldenWillowsNav && <NabarGoldenWillows />}

    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatInterface from './components/ChatInterface'
import Home from './pages/Home'
import ClassTenthBelow from './pages/ClassTenthBelow'
import StreamSelection from './pages/StreamSelection'
import Engineering from './pages/Engineering'
import Medical from './pages/Medical'
import Commerce from './pages/Commerce'
import Arts from './pages/Arts'
import AIImpact from './pages/AIImpact'
import Resources from './pages/Resources'
import EmergingCareers from './pages/EmergingCareers'

// Engineering Career Details
import ComputerScienceDetails from './pages/careers/ComputerScienceDetails'
import ElectricalEngineeringDetails from './pages/careers/ElectricalEngineeringDetails'
import MechanicalEngineeringDetails from './pages/careers/MechanicalEngineeringDetails'
import CivilEngineeringDetails from './pages/careers/CivilEngineeringDetails'
import ArchitectureDetails from './pages/careers/ArchitectureDetails'
import AerospaceEngineeringDetails from './pages/careers/AerospaceEngineeringDetails'
import ChemicalEngineeringDetails from './pages/careers/ChemicalEngineeringDetails'
import BiotechnologyEngineeringDetails from './pages/careers/BiotechnologyEngineeringDetails'
import DataScientistMLDetails from './pages/careers/DataScientistMLDetails'

// Medical Career Details
import MBBSDetails from './pages/careers/MBBSDetails'
import DentistryDetails from './pages/careers/DentistryDetails'
import VeterinaryDetails from './pages/careers/VeterinaryDetails'
import PhysiotherapyDetails from './pages/careers/PhysiotherapyDetails'
import NursingDetails from './pages/careers/NursingDetails'
import PharmacyDetails from './pages/careers/PharmacyDetails'

// Commerce Career Details
import TraderDetails from './pages/careers/TraderDetails'
import BBADetails from './pages/careers/BBADetails'
import HotelManagementDetails from './pages/careers/HotelManagementDetails'
import EventManagementDetails from './pages/careers/EventManagementDetails'
import CADetails from './pages/careers/CADetails'
import CSDetails from './pages/careers/CSDetails'
import InvestmentBankingDetails from './pages/careers/InvestmentBankingDetails'

// Arts Career Details
import TeacherDetails from './pages/careers/TeacherDetails'
import PoliticianDetails from './pages/careers/PoliticianDetails'
import PsychologyDetails from './pages/careers/PsychologyDetails'
import JournalismDetails from './pages/careers/JournalismDetails'
import DesignDetails from './pages/careers/DesignDetails'
import FashionDesignDetails from './pages/careers/FashionDesignDetails'
import AnimationVFXDetails from './pages/careers/AnimationVFXDetails'

// Emerging Careers Details
import HairStylistDetails from './pages/careers/HairStylistDetails'
import ProfessionalChefDetails from './pages/careers/ProfessionalChefDetails'
import DubbingArtistDetails from './pages/careers/DubbingArtistDetails'
import ProfessionalBoxerDetails from './pages/careers/ProfessionalBoxerDetails'
import ProfessionalBodybuilderDetails from './pages/careers/ProfessionalBodybuilderDetails'
import ProfessionalWrestlerDetails from './pages/careers/ProfessionalWrestlerDetails'
import ProfessionalModelDetails from './pages/careers/ProfessionalModelDetails'
import MakeupArtistDetails from './pages/careers/MakeupArtistDetails'
import ProfessionalCricketerDetails from './pages/careers/ProfessionalCricketerDetails'
import ProfessionalAthleteDetails from './pages/careers/ProfessionalAthleteDetails'
import EsportsDetails from './pages/careers/EsportsDetails'
import ContentCreatorDetails from './pages/careers/ContentCreatorDetails'
import ProfessionalDancerDetails from './pages/careers/ProfessionalDancerDetails'
import MusicianDetails from './pages/careers/MusicianDetails'
import StandupComedyDetails from './pages/careers/StandupComedyDetails'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/class-10-below" element={<ClassTenthBelow />} />
            <Route path="/stream-selection" element={<StreamSelection />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/commerce" element={<Commerce />} />
            <Route path="/arts" element={<Arts />} />
            <Route path="/ai-impact" element={<AIImpact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/emerging-careers" element={<EmergingCareers />} />
            
            {/* Engineering Career Detail Routes */}
            <Route path="/career/computer-science-engineering" element={<ComputerScienceDetails />} />
            <Route path="/career/electrical-engineering" element={<ElectricalEngineeringDetails />} />
            <Route path="/career/mechanical-engineering" element={<MechanicalEngineeringDetails />} />
            <Route path="/career/civil-engineering" element={<CivilEngineeringDetails />} />
            <Route path="/career/architecture" element={<ArchitectureDetails />} />
            <Route path="/career/aerospace-engineering" element={<AerospaceEngineeringDetails />} />
            <Route path="/career/chemical-engineering" element={<ChemicalEngineeringDetails />} />
            <Route path="/career/biotechnology-engineering" element={<BiotechnologyEngineeringDetails />} />
            <Route path="/career/data-scientist-ml" element={<DataScientistMLDetails />} />
            
            {/* Medical Career Detail Routes */}
            <Route path="/career/doctor-mbbs" element={<MBBSDetails />} />
            <Route path="/career/dentistry" element={<DentistryDetails />} />
            <Route path="/career/veterinary" element={<VeterinaryDetails />} />
            <Route path="/career/physiotherapy" element={<PhysiotherapyDetails />} />
            <Route path="/career/nursing" element={<NursingDetails />} />
            <Route path="/career/pharmacy" element={<PharmacyDetails />} />
            
            {/* Commerce Career Detail Routes */}
            <Route path="/career/trader" element={<TraderDetails />} />
            <Route path="/career/bba" element={<BBADetails />} />
            <Route path="/career/hotel-management" element={<HotelManagementDetails />} />
            <Route path="/career/event-management" element={<EventManagementDetails />} />
            <Route path="/career/chartered-accountant" element={<CADetails />} />
            <Route path="/career/company-secretary" element={<CSDetails />} />
            <Route path="/career/investment-banking" element={<InvestmentBankingDetails />} />
            
            {/* Arts Career Detail Routes */}
            <Route path="/career/teacher" element={<TeacherDetails />} />
            <Route path="/career/politician" element={<PoliticianDetails />} />
            <Route path="/career/psychology" element={<PsychologyDetails />} />
            <Route path="/career/journalism" element={<JournalismDetails />} />
            <Route path="/career/design" element={<DesignDetails />} />
            <Route path="/career/fashion-design" element={<FashionDesignDetails />} />
            <Route path="/career/animation-vfx" element={<AnimationVFXDetails />} />
            
            {/* Emerging Careers Detail Routes */}
            <Route path="/career/hair-stylist" element={<HairStylistDetails />} />
            <Route path="/career/professional-chef" element={<ProfessionalChefDetails />} />
            <Route path="/career/dubbing-artist" element={<DubbingArtistDetails />} />
            <Route path="/career/professional-boxer" element={<ProfessionalBoxerDetails />} />
            <Route path="/career/professional-bodybuilder" element={<ProfessionalBodybuilderDetails />} />
            <Route path="/career/professional-wrestler" element={<ProfessionalWrestlerDetails />} />
            <Route path="/career/professional-model" element={<ProfessionalModelDetails />} />
            <Route path="/career/makeup-artist" element={<MakeupArtistDetails />} />
            <Route path="/career/professional-cricketer" element={<ProfessionalCricketerDetails />} />
            <Route path="/career/professional-athlete" element={<ProfessionalAthleteDetails />} />
            <Route path="/career/professional-esports" element={<EsportsDetails />} />
            <Route path="/career/content-creator" element={<ContentCreatorDetails />} />
            <Route path="/career/professional-dancer" element={<ProfessionalDancerDetails />} />
            <Route path="/career/musician" element={<MusicianDetails />} />
            <Route path="/career/standup-comedy" element={<StandupComedyDetails />} />
          </Routes>
        </main>
        <Footer />
        <ChatInterface />
      </div>
    </Router>
  )
}

export default App
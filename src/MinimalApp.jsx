import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import SimpleHome from './pages/SimpleHome'
import StreamSelection from './pages/StreamSelection'
import Engineering from './pages/Engineering'
import Medical from './pages/Medical'
import Commerce from './pages/Commerce'
import Arts from './pages/Arts'
import EmergingCareers from './pages/EmergingCareers'
import ClassTenthBelow from './pages/ClassTenthBelow'
import AIImpact from './pages/AIImpact'
import NewResources from './pages/NewResources'
import CoursesPage from './pages/CoursesPage'
import ComputerScienceDetails from './pages/careers/ComputerScienceDetails'
import ElectricalEngineeringDetails from './pages/careers/ElectricalEngineeringDetails'
import MechanicalEngineeringDetails from './pages/careers/MechanicalEngineeringDetails'
import CivilEngineeringDetails from './pages/careers/CivilEngineeringDetails'
import MBBSDetails from './pages/careers/MBBSDetails'
import NursingDetails from './pages/careers/NursingDetails'
import PharmacyDetails from './pages/careers/PharmacyDetails'
import CADetails from './pages/careers/CADetails'
import CSDetails from './pages/careers/CSDetails'
import InvestmentBankingDetails from './pages/careers/InvestmentBankingDetails'
import PsychologyDetails from './pages/careers/PsychologyDetails'
import JournalismDetails from './pages/careers/JournalismDetails'
import DesignDetails from './pages/careers/DesignDetails'
import ArchitectureDetails from './pages/careers/ArchitectureDetails'
import EsportsDetails from './pages/careers/EsportsDetails'
import ContentCreatorDetails from './pages/careers/ContentCreatorDetails'
import ProfessionalDancerDetails from './pages/careers/ProfessionalDancerDetails'
import MusicianDetails from './pages/careers/MusicianDetails'
import StandupComedyDetails from './pages/careers/StandupComedyDetails'
import AerospaceEngineeringDetails from './pages/careers/AerospaceEngineeringDetails'
import LawyerDetails from './pages/careers/LawyerDetails'
import AgricultureDetails from './pages/careers/AgricultureDetails'
import GameDeveloperDetails from './pages/careers/GameDeveloperDetails'
import ChefDetails from './pages/careers/ChefDetails'
import PhotographerDetails from './pages/careers/PhotographerDetails'
import BusinessDetails from './pages/careers/BusinessDetails'
import AstrologyDetails from './pages/careers/AstrologyDetails'
import ScientistDetails from './pages/careers/ScientistDetails'
import AstronautDetails from './pages/careers/AstronautDetails'
import EthicalHackerDetails from './pages/careers/EthicalHackerDetails'
import DataScientistDetails from './pages/careers/DataScientistDetails'
import CloudEngineerDetails from './pages/careers/CloudEngineerDetails'
import UIUXDesignerDetails from './pages/careers/UIUXDesignerDetails'
import StockMarketAnalystDetails from './pages/careers/StockMarketAnalystDetails'
import InvestmentBankerDetails from './pages/careers/InvestmentBankerDetails'
import ScriptWriterDetails from './pages/careers/ScriptWriterDetails'

function MinimalApp() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<SimpleHome />} />
            <Route path="/stream-selection" element={<StreamSelection />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="/medical" element={<Medical />} />
            <Route path="/commerce" element={<Commerce />} />
            <Route path="/arts" element={<Arts />} />
            <Route path="/emerging-careers" element={<EmergingCareers />} />
            <Route path="/class-10-below" element={<ClassTenthBelow />} />
            <Route path="/ai-impact" element={<AIImpact />} />
            <Route path="/resources" element={<NewResources />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/career/computer-science-engineering" element={<ComputerScienceDetails />} />
            <Route path="/career/electrical-engineering" element={<ElectricalEngineeringDetails />} />
            <Route path="/career/mechanical-engineering" element={<MechanicalEngineeringDetails />} />
            <Route path="/career/civil-engineering" element={<CivilEngineeringDetails />} />
            <Route path="/career/doctor-mbbs" element={<MBBSDetails />} />
            <Route path="/career/nursing" element={<NursingDetails />} />
            <Route path="/career/pharmacy" element={<PharmacyDetails />} />
            <Route path="/career/chartered-accountant" element={<CADetails />} />
            <Route path="/career/company-secretary" element={<CSDetails />} />
            <Route path="/career/investment-banking" element={<InvestmentBankingDetails />} />
            <Route path="/career/psychology" element={<PsychologyDetails />} />
            <Route path="/career/journalism" element={<JournalismDetails />} />
            <Route path="/career/design" element={<DesignDetails />} />
            <Route path="/career/architecture" element={<ArchitectureDetails />} />
            <Route path="/career/professional-esports" element={<EsportsDetails />} />
            <Route path="/career/content-creator" element={<ContentCreatorDetails />} />
            <Route path="/career/professional-dancer" element={<ProfessionalDancerDetails />} />
            <Route path="/career/musician" element={<MusicianDetails />} />
            <Route path="/career/standup-comedy" element={<StandupComedyDetails />} />
            <Route path="/career/aerospace-engineering" element={<AerospaceEngineeringDetails />} />
            <Route path="/career/lawyer" element={<LawyerDetails />} />
            <Route path="/career/agriculture" element={<AgricultureDetails />} />
            <Route path="/career/game-developer" element={<GameDeveloperDetails />} />
            <Route path="/career/chef" element={<ChefDetails />} />
            <Route path="/career/photographer" element={<PhotographerDetails />} />
            <Route path="/career/business" element={<BusinessDetails />} />
            <Route path="/career/astrology" element={<AstrologyDetails />} />
            <Route path="/career/scientist" element={<ScientistDetails />} />
            <Route path="/career/astronaut" element={<AstronautDetails />} />
            <Route path="/career/ethical-hacker" element={<EthicalHackerDetails />} />
            <Route path="/career/data-scientist" element={<DataScientistDetails />} />
            <Route path="/career/cloud-engineer" element={<CloudEngineerDetails />} />
            <Route path="/career/ui-ux-designer" element={<UIUXDesignerDetails />} />
            <Route path="/career/stock-market-analyst" element={<StockMarketAnalystDetails />} />
            <Route path="/career/investment-banker" element={<InvestmentBankerDetails />} />
            <Route path="/career/script-writer" element={<ScriptWriterDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default MinimalApp
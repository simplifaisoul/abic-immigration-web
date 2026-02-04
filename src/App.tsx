import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import TextureOverlay from "./components/TextureOverlay";
import Home from "./pages/Home";
import About from "./pages/About";
import BookConsultation from "./pages/BookConsultation";
import ExpressEntry from "./pages/ExpressEntry";
import PRCitizenship from "./pages/PRCitizenship";
import FamilySponsorship from "./pages/FamilySponsorship";
import EmployersLMIA from "./pages/EmployersLMIA";
import WorkPermit from "./pages/WorkPermit";
import StudentsWaterloo from "./pages/StudentsWaterloo";
import StudentsGuelph from "./pages/StudentsGuelph";
import EOOffice from "./pages/EOOffice";
import Resources from "./pages/Resources";
import PlaceholderPage from "./pages/Placeholder";
import VisitorVisaApplication from "./pages/visitor/Application";
import VisitorVisaExtension from "./pages/visitor/Extension";
import VisitorVisaRefusals from "./pages/visitor/Refusals";
import StudyApplication from "./pages/study/Application";
import StudyExtension from "./pages/study/Extension";
import StudyRefusals from "./pages/study/Refusals";

import WaterlooOverview from "./pages/students-waterloo/Overview";
import WaterlooPGWP from "./pages/students-waterloo/PGWP";
import WaterlooStudyPermit from "./pages/students-waterloo/StudyPermit";
import WaterlooExtension from "./pages/students-waterloo/Extension";
import WaterlooWorkWhileStudying from "./pages/students-waterloo/WorkWhileStudying";
import WaterlooRefusals from "./pages/students-waterloo/Refusals";
import WaterlooLocalSupport from "./pages/students-waterloo/LocalSupport";

import GuelphOverview from "./pages/students-guelph/Overview";
import GuelphStudyPermit from "./pages/students-guelph/StudyPermit";
import GuelphExtension from "./pages/students-guelph/Extension";
import GuelphPGWP from "./pages/students-guelph/PGWP";
import GuelphWorkWhileStudying from "./pages/students-guelph/WorkWhileStudying";
import GuelphRefusals from "./pages/students-guelph/Refusals";
import GuelphLocalSupport from "./pages/students-guelph/LocalSupport";

import WorkPermitOverview from "./pages/work-permit/Overview";
import WorkPermitExtension from "./pages/work-permit/Extension";
import PGWP from "./pages/work-permit/PGWP";

import FSW from "./pages/express-entry/FSW";
import CEC from "./pages/express-entry/CEC";
import FST from "./pages/express-entry/FST";

import PR from "./pages/pr-citizenship/PR";
import Citizenship from "./pages/pr-citizenship/Citizenship";

import SpousalSponsorship from "./pages/family-sponsorship/Spousal";
import CommonLaw from "./pages/family-sponsorship/CommonLaw";
import SameSex from "./pages/family-sponsorship/SameSex";

import LMIA from "./pages/employers/LMIA";
import Recruitment from "./pages/employers/Recruitment";
import EmployerCompliance from "./pages/employers/Compliance";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-inter relative">
      <TextureOverlay />
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Temporary / Other Aliases for new Nav items */}
          <Route path="/why-choose-abic" element={<About />} />
          <Route path="/services-overview" element={<Home />} />
          <Route path="/about/credentials" element={<About />} />
          <Route path="/about/verify-status" element={<About />} />
          <Route path="/about/reviews" element={<About />} />
          <Route path="/about/ethics" element={<About />} />

          {/* Services */}
          {/* Services - Visitor Visa */}
          <Route path="/visitor-visa/application" element={<VisitorVisaApplication />} />
          <Route path="/visitor-visa/extension" element={<VisitorVisaExtension />} />
          <Route path="/visitor-visa/refusals" element={<VisitorVisaRefusals />} />
          <Route path="/visitor-visa" element={<VisitorVisaApplication />} />

          {/* Services - Study */}
          <Route path="/study-in-canada/application" element={<StudyApplication />} />
          <Route path="/study-in-canada/extension" element={<StudyExtension />} />
          <Route path="/study-in-canada/refusals" element={<StudyRefusals />} />
          <Route path="/study-in-canada" element={<StudyApplication />} />

          {/* Services - Work */}
          <Route path="/work-permit/overview" element={<WorkPermitOverview />} />
          <Route path="/work-permit/extension" element={<WorkPermitExtension />} />
          <Route path="/work-permit/pgwp" element={<PGWP />} />
          <Route path="/work-permit" element={<WorkPermit />} />

          {/* Services - Express Entry */}
          <Route path="/express-entry/fsw" element={<FSW />} />
          <Route path="/express-entry/cec" element={<CEC />} />
          <Route path="/express-entry/fst" element={<FST />} />
          <Route path="/express-entry" element={<ExpressEntry />} />

          {/* Services - PR & Citizenship */}
          <Route path="/pr-citizenship/pr" element={<PR />} />
          <Route path="/pr-citizenship/citizenship" element={<Citizenship />} />
          <Route path="/pr-citizenship" element={<PRCitizenship />} />

          {/* Services - Family */}
          <Route path="/family-sponsorship/spousal" element={<SpousalSponsorship />} />
          <Route path="/family-sponsorship/common-law" element={<CommonLaw />} />
          <Route path="/family-sponsorship/same-sex" element={<SameSex />} />
          <Route path="/family-sponsorship" element={<FamilySponsorship />} />

          {/* Services - Employer */}
          <Route path="/employers-lmia/process" element={<LMIA />} />
          <Route path="/employers-lmia/recruitment" element={<Recruitment />} />
          <Route path="/employers-lmia/compliance" element={<EmployerCompliance />} />
          <Route path="/employers-lmia" element={<EmployersLMIA />} />

          {/* Students - Waterloo */}
          <Route path="/students/waterloo/overview" element={<WaterlooOverview />} />
          <Route path="/students/waterloo/study-permit" element={<WaterlooStudyPermit />} />
          <Route path="/students/waterloo/extension" element={<WaterlooExtension />} />
          <Route path="/students/waterloo/pgwp" element={<WaterlooPGWP />} />
          <Route path="/students/waterloo/work-while-studying" element={<WaterlooWorkWhileStudying />} />
          <Route path="/students/waterloo/refusals" element={<WaterlooRefusals />} />
          <Route path="/students/waterloo/local-support" element={<WaterlooLocalSupport />} />
          <Route path="/students/waterloo" element={<WaterlooOverview />} />

          {/* Students - Guelph */}
          <Route path="/students/guelph/overview" element={<GuelphOverview />} />
          <Route path="/students/guelph/study-permit" element={<GuelphStudyPermit />} />
          <Route path="/students/guelph/extension" element={<GuelphExtension />} />
          <Route path="/students/guelph/pgwp" element={<GuelphPGWP />} />
          <Route path="/students/guelph/work-while-studying" element={<GuelphWorkWhileStudying />} />
          <Route path="/students/guelph/refusals" element={<GuelphRefusals />} />
          <Route path="/students/guelph/local-support" element={<GuelphLocalSupport />} />
          <Route path="/students/guelph" element={<GuelphOverview />} />

          {/* Other */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/e-office" element={<EOOffice />} />
          <Route path="/book-consultation" element={<BookConsultation />} />

          {/* Fallback */}
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

// Main App Component
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import TextureOverlay from "./components/TextureOverlay";
import Home from "./pages/Home";
import BookConsultation from "./pages/BookConsultation";
import Contact from "./pages/Contact";
import ServicesOverview from "./pages/ServicesOverview";
// NEW About Sub-pages
import OurPractice from "./pages/about/OurPractice";
import Credentials from "./pages/about/Credentials";
import VerifyStatus from "./pages/about/VerifyStatus";
import Reviews from "./pages/about/Reviews";
import Ethics from "./pages/about/Ethics";

// Visitor
import { VisitorVisaApplication, VisitorVisaExtension, VisitorVisaRefusals } from "./pages/visitor";

// Study
import { StudyApplication, StudyExtension, StudyRefusals } from "./pages/study";

// Work
import { WorkPermitOverview, WorkPermitExtension, PGWP, WorkPermit } from "./pages/work-permit";

// Express Entry
import ExpressEntry from "./pages/ExpressEntry";
import FederalSkilledWorker from "./pages/express-entry/FederalSkilledWorker";
import CanadianExperienceClass from "./pages/express-entry/CanadianExperienceClass";
import SkilledTrades from "./pages/express-entry/SkilledTrades";

// PR & Citizenship
import { PR, Citizenship, PRCitizenship } from "./pages/pr-citizenship";

// Family
import { FamilySponsorship, SpousalSponsorship, CommonLaw, SameSex } from "./pages/family-sponsorship";

// Employer
import { EmployersLMIA, LMIA, Recruitment, EmployerCompliance } from "./pages/employers-lmia";

// Students
import {
  WaterlooOverview, WaterlooStudyPermit, WaterlooExtension, WaterlooPGWP, WaterlooWorkWhileStudying, WaterlooRefusals, WaterlooLocalSupport
} from "./pages/students-waterloo";

import {
  GuelphOverview, GuelphStudyPermit, GuelphExtension, GuelphPGWP, GuelphWorkWhileStudying, GuelphRefusals, GuelphLocalSupport
} from "./pages/students-guelph";

import Fees from "./pages/Fees";
import MasterClass from "./pages/MasterClass";
import Resources from "./pages/Resources";
import EOOffice from "./pages/EOOffice";
import StudentsLanding from "./pages/StudentsLanding";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-inter relative">
      <TextureOverlay />

      {/* Header handled inside internal layout but we can keep it here if Header contains TopBar */}
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/master-class" element={<MasterClass />} />

          {/* About Routes */}
          <Route path="/about" element={<OurPractice />} />
          <Route path="/about/our-practice" element={<OurPractice />} /> {/* Added matching route */}
          <Route path="/why-choose-abic" element={<OurPractice />} />

          <Route path="/services" element={<ServicesOverview />} /> {/* Fixed Route */}
          <Route path="/services-overview" element={<ServicesOverview />} />

          {/* About Us granular routes */}
          <Route path="/about/credentials" element={<Credentials />} />
          <Route path="/about/verify-status" element={<VerifyStatus />} />
          <Route path="/about/reviews" element={<Reviews />} />
          <Route path="/about/ethics" element={<Ethics />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Students Landing */}
          <Route path="/students" element={<StudentsLanding />} />

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
          <Route path="/express-entry/federal-skilled-worker" element={<FederalSkilledWorker />} />
          <Route path="/express-entry/canadian-experience-class" element={<CanadianExperienceClass />} />
          <Route path="/express-entry/skilled-trades" element={<SkilledTrades />} />
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
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

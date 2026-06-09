import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { StandaloneServicesPage } from './components/StandaloneServicesPage';
import { StandaloneAboutPage } from './components/StandaloneAboutPage';
import { StandaloneCoursesPage } from './components/StandaloneCoursesPage';
import { StandaloneStorePage } from './components/StandaloneStorePage';
import { StandaloneBlogPage } from './components/StandaloneBlogPage';
import { UnderwaterTreadmillPage } from './components/UnderwaterTreadmillPage';
import { PhysicalTherapyPage } from './components/PhysicalTherapyPage';
import { IntegrativeHolisticPage } from './components/IntegrativeHolisticPage';
import { CancerTreatmentPage } from './components/CancerTreatmentPage';
import { AcupuncturePage } from './components/AcupuncturePage';
import { TherapeuticExercisePage } from './components/TherapeuticExercisePage';
import { LaserTherapyPage } from './components/LaserTherapyPage';
import { ShockwaveTherapyPage } from './components/ShockwaveTherapyPage';
import { WheelchairsMobilityPage } from './components/WheelchairsMobilityPage';
import { OrthoticsProstheticsPage } from './components/OrthoticsProstheticsPage';
import { CommonAilmentsPage } from './components/CommonAilmentsPage';
import { ArthritisPage } from './components/ailments/ArthritisPage';
import { HipElbowDysplasiaPage } from './components/ailments/HipElbowDysplasiaPage';
import { SeniorPatientsPage } from './components/ailments/SeniorPatientsPage';
import { PostOrthopedicSurgeryPage } from './components/ailments/PostOrthopedicSurgeryPage';
import { PostTPLOTTACCLSurgeryPage } from './components/ailments/PostTPLOTTACCLSurgeryPage';
import { PostNeurologicSurgeryPage } from './components/ailments/PostNeurologicSurgeryPage';
import { SeniorNeurologicPage } from './components/ailments/SeniorNeurologicPage';
import { ObesityPage } from './components/ailments/ObesityPage';
import { InoperableOrthopedicPage } from './components/ailments/InoperableOrthopedicPage';
import { CanineAthletesPage } from './components/ailments/CanineAthletesPage';
import { SkinAllergiesPage } from './components/ailments/SkinAllergiesPage';
import { SpinalInjuryPage } from './components/ailments/SpinalInjuryPage';
import { CCLInjuryPage } from './components/ailments/CCLInjuryPage';
import { HomeopathyPage } from './components/HomeopathyPage';
import { HerbalTherapyPage } from './components/HerbalTherapyPage';
import { FMBRTPage } from './components/FMBRTPage';
import { OzoneTherapyPage } from './components/OzoneTherapyPage';
import { MistletoeTherapyPage } from './components/MistletoeTherapyPage';
import { VitaminCTherapyPage } from './components/VitaminCTherapyPage';
import { InflammatoryScreeningPage } from './components/InflammatoryScreeningPage';
import { DrDaniellePage } from './components/DrDaniellePage';
import { JessicaDreyfussPage } from './components/JessicaDreyfussPage';
import { VideoLibraryPage } from './components/VideoLibraryPage';
import { ScrollToTop } from './components/ScrollToTop';
import WireframePage from './components/WireframePage';
import { FecalMicrobiomeBlogPost } from './components/blog/FecalMicrobiomeBlogPost';
import { KidneyDiseaseBlogPost } from './components/blog/KidneyDiseaseBlogPost';
import { VitaminDBlogPost } from './components/blog/VitaminDBlogPost';
import { LaryngealParalysisBlogPost } from './components/blog/LaryngealParalysisBlogPost';
import { PetAllergiesBlogPost } from './components/blog/PetAllergiesBlogPost';
import { LaserTherapyBlogPost } from './components/blog/LaserTherapyBlogPost';
import { InnovativeCareFeatureBlogPost } from './components/blog/InnovativeCareFeatureBlogPost';
import { PetInsuranceBlogPost } from './components/blog/PetInsuranceBlogPost';
import { LocalLoveBlogPost } from './components/blog/LocalLoveBlogPost';
import { DegenerativeMyelopathyBlogPost } from './components/blog/DegenerativeMyelopathyBlogPost';
import { RehabilitationKneeBlogPost } from './components/blog/RehabilitationKneeBlogPost';
import { IVDDAcupunctureBlogPost } from './components/blog/IVDDAcupunctureBlogPost';

// Build timestamp: 2026-04-10T14:30:00

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<StandaloneServicesPage />} />
        <Route path="/services/physical-therapy" element={<PhysicalTherapyPage />} />
        <Route path="/services/integrative-holistic" element={<IntegrativeHolisticPage />} />
        <Route path="/services/cancer-treatment" element={<CancerTreatmentPage />} />
        <Route path="/services/acupuncture" element={<AcupuncturePage />} />
        <Route path="/services/underwater-treadmill" element={<UnderwaterTreadmillPage />} />
        <Route path="/services/therapeutic-exercise" element={<TherapeuticExercisePage />} />
        <Route path="/services/laser-therapy" element={<LaserTherapyPage />} />
        <Route path="/services/shockwave-therapy" element={<ShockwaveTherapyPage />} />
        <Route path="/services/wheelchairs-mobility" element={<WheelchairsMobilityPage />} />
        <Route path="/services/orthotics-prosthetics" element={<OrthoticsProstheticsPage />} />
        <Route path="/common-ailments" element={<CommonAilmentsPage />} />
        <Route path="/common-ailments/arthritis" element={<ArthritisPage />} />
        <Route path="/common-ailments/hip-elbow-dysplasia" element={<HipElbowDysplasiaPage />} />
        <Route path="/common-ailments/senior-patients" element={<SeniorPatientsPage />} />
        <Route path="/common-ailments/post-orthopedic-surgery" element={<PostOrthopedicSurgeryPage />} />
        <Route path="/common-ailments/post-tplo-tta-ccl-surgery" element={<PostTPLOTTACCLSurgeryPage />} />
        <Route path="/common-ailments/post-neurologic-surgery" element={<PostNeurologicSurgeryPage />} />
        <Route path="/common-ailments/senior-neurologic" element={<SeniorNeurologicPage />} />
        <Route path="/common-ailments/obesity" element={<ObesityPage />} />
        <Route path="/common-ailments/inoperable-orthopedic" element={<InoperableOrthopedicPage />} />
        <Route path="/common-ailments/canine-athletes" element={<CanineAthletesPage />} />
        <Route path="/common-ailments/skin-allergies" element={<SkinAllergiesPage />} />
        <Route path="/common-ailments/spinal-injury" element={<SpinalInjuryPage />} />
        <Route path="/common-ailments/ccl-injury" element={<CCLInjuryPage />} />
        <Route path="/services/homeopathy" element={<HomeopathyPage />} />
        <Route path="/services/herbal-therapy" element={<HerbalTherapyPage />} />
        <Route path="/services/fmbrt" element={<FMBRTPage />} />
        <Route path="/services/ozone-therapy" element={<OzoneTherapyPage />} />
        <Route path="/services/mistletoe-therapy" element={<MistletoeTherapyPage />} />
        <Route path="/services/vitamin-c-therapy" element={<VitaminCTherapyPage />} />
        <Route path="/services/inflammatory-screening" element={<InflammatoryScreeningPage />} />
        <Route path="/about" element={<StandaloneAboutPage />} />
        <Route path="/team/dr-danielle-barberini" element={<DrDaniellePage />} />
        <Route path="/team/dr-jessica-dreyfuss" element={<JessicaDreyfussPage />} />
        <Route path="/videos" element={<VideoLibraryPage />} />
        <Route path="/blog" element={<StandaloneBlogPage />} />
        <Route path="/blog/fecal-microbiome-transplants" element={<FecalMicrobiomeBlogPost />} />
        <Route path="/blog/treating-kidney-disease-naturally" element={<KidneyDiseaseBlogPost />} />
        <Route path="/blog/vitamin-d-levels" element={<VitaminDBlogPost />} />
        <Route path="/blog/treating-laryngeal-paralysis-naturally" element={<LaryngealParalysisBlogPost />} />
        <Route path="/blog/treating-pet-allergies-naturally" element={<PetAllergiesBlogPost />} />
        <Route path="/blog/laser-therapy-fort-lauderdale" element={<LaserTherapyBlogPost />} />
        <Route path="/blog/innovative-care-feature" element={<InnovativeCareFeatureBlogPost />} />
        <Route path="/blog/pet-insurance" element={<PetInsuranceBlogPost />} />
        <Route path="/blog/local-love-fort-lauderdale-magazine" element={<LocalLoveBlogPost />} />
        <Route path="/blog/degenerative-myelopathy-in-dogs" element={<DegenerativeMyelopathyBlogPost />} />
        <Route path="/blog/rehabilitation-after-canine-knee-surgery" element={<RehabilitationKneeBlogPost />} />
        <Route path="/blog/treating-ivdd-with-acupuncture" element={<IVDDAcupunctureBlogPost />} />
        <Route path="/courses" element={<StandaloneCoursesPage />} />
        <Route path="/store" element={<StandaloneStorePage />} />
        <Route path="/wireframe" element={<WireframePage />} />
      </Routes>
    </Router>
  );
}
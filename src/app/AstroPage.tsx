import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
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

type PageComponent = React.ComponentType<Record<string, never>>;

const pages: Record<string, PageComponent> = {
  HomePage: HomePage,
  StandaloneServicesPage: StandaloneServicesPage,
  PhysicalTherapyPage: PhysicalTherapyPage,
  IntegrativeHolisticPage: IntegrativeHolisticPage,
  CancerTreatmentPage: CancerTreatmentPage,
  AcupuncturePage: AcupuncturePage,
  UnderwaterTreadmillPage: UnderwaterTreadmillPage,
  TherapeuticExercisePage: TherapeuticExercisePage,
  LaserTherapyPage: LaserTherapyPage,
  ShockwaveTherapyPage: ShockwaveTherapyPage,
  WheelchairsMobilityPage: WheelchairsMobilityPage,
  OrthoticsProstheticsPage: OrthoticsProstheticsPage,
  CommonAilmentsPage: CommonAilmentsPage,
  ArthritisPage: ArthritisPage,
  HipElbowDysplasiaPage: HipElbowDysplasiaPage,
  SeniorPatientsPage: SeniorPatientsPage,
  PostOrthopedicSurgeryPage: PostOrthopedicSurgeryPage,
  PostTPLOTTACCLSurgeryPage: PostTPLOTTACCLSurgeryPage,
  PostNeurologicSurgeryPage: PostNeurologicSurgeryPage,
  SeniorNeurologicPage: SeniorNeurologicPage,
  ObesityPage: ObesityPage,
  InoperableOrthopedicPage: InoperableOrthopedicPage,
  CanineAthletesPage: CanineAthletesPage,
  SkinAllergiesPage: SkinAllergiesPage,
  SpinalInjuryPage: SpinalInjuryPage,
  CCLInjuryPage: CCLInjuryPage,
  HomeopathyPage: HomeopathyPage,
  HerbalTherapyPage: HerbalTherapyPage,
  FMBRTPage: FMBRTPage,
  OzoneTherapyPage: OzoneTherapyPage,
  MistletoeTherapyPage: MistletoeTherapyPage,
  VitaminCTherapyPage: VitaminCTherapyPage,
  InflammatoryScreeningPage: InflammatoryScreeningPage,
  StandaloneAboutPage: StandaloneAboutPage,
  DrDaniellePage: DrDaniellePage,
  JessicaDreyfussPage: JessicaDreyfussPage,
  VideoLibraryPage: VideoLibraryPage,
  StandaloneBlogPage: StandaloneBlogPage,
  FecalMicrobiomeBlogPost: FecalMicrobiomeBlogPost,
  KidneyDiseaseBlogPost: KidneyDiseaseBlogPost,
  VitaminDBlogPost: VitaminDBlogPost,
  LaryngealParalysisBlogPost: LaryngealParalysisBlogPost,
  PetAllergiesBlogPost: PetAllergiesBlogPost,
  LaserTherapyBlogPost: LaserTherapyBlogPost,
  InnovativeCareFeatureBlogPost: InnovativeCareFeatureBlogPost,
  PetInsuranceBlogPost: PetInsuranceBlogPost,
  LocalLoveBlogPost: LocalLoveBlogPost,
  DegenerativeMyelopathyBlogPost: DegenerativeMyelopathyBlogPost,
  RehabilitationKneeBlogPost: RehabilitationKneeBlogPost,
  IVDDAcupunctureBlogPost: IVDDAcupunctureBlogPost,
  StandaloneCoursesPage: StandaloneCoursesPage,
  StandaloneStorePage: StandaloneStorePage,
  WireframePage: WireframePage
};

interface AstroPageProps {
  componentName: string;
  route: string;
}

export default function AstroPage({ componentName, route }: AstroPageProps) {
  const Page = pages[componentName];

  if (!Page) {
    return <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>Page not found: {componentName}</main>;
  }

  const isBrowser = typeof window !== 'undefined';
  const Router = isBrowser ? BrowserRouter : StaticRouter;
  const routerProps = isBrowser ? {} : { location: route };

  return (
    <HelmetProvider>
      <Router {...routerProps}>
        <Page />
      </Router>
    </HelmetProvider>
  );
}

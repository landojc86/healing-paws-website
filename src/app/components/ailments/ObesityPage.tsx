import { AilmentDetailTemplate } from './AilmentDetailTemplate';
import { Weight } from 'lucide-react';

export function ObesityPage() {
  return (
    <AilmentDetailTemplate
      title="Obesity/Overweight"
      subtitle="Safe, effective weight management through therapeutic exercise"
      description="Excess weight puts tremendous strain on your pet's joints, organs, and overall health, significantly reducing their quality of life and lifespan. Obesity is linked to arthritis, diabetes, heart disease, and numerous other health problems. Our comprehensive weight management programs combine therapeutic exercise with nutritional guidance to help your pet achieve and maintain a healthy weight safely. We create individualized plans that account for any existing mobility issues or health conditions."
      Icon={Weight}
      color="bg-gradient-to-br from-[#b7e1da] to-[#b48cbf]"
      seoTitle="Pet Weight Loss & Obesity Management"
      seoDescription="Safe pet weight loss in Fort Lauderdale. Help overweight dogs & cats lose weight with underwater treadmill, exercise programs & nutrition guidance."
      seoCanonical="/common-ailments/obesity"
      seoKeywords="pet weight loss Fort Lauderdale, dog obesity treatment Oakland Park, cat weight management, overweight dog therapy, pet fitness Fort Lauderdale"
      symptoms={[
        'Visible excess body fat or loss of waist',
        'Difficulty feeling ribs under skin',
        'Decreased activity or exercise intolerance',
        'Labored breathing during activity',
        'Difficulty with stairs or jumping',
        'Joint pain or stiffness',
        'Reluctance to play or exercise',
        'Overheating easily',
        'Excessive panting',
        'Low energy or lethargy'
      ]}
      treatments={[
        'Underwater Treadmill Therapy: Low-impact cardiovascular exercise that burns calories while protecting joints from the stress of excess weight.',
        'Progressive Exercise Programs: Carefully designed activity plans that start at your pet\'s current fitness level and gradually increase as they lose weight.',
        'Strengthening Exercises: Building muscle mass to increase metabolism and support joints carrying excess weight.',
        'Nutritional Counseling: Working with your veterinarian to create appropriate feeding plans and portion control strategies.',
        'Activity Monitoring: Tracking progress and adjusting programs based on weight loss and fitness improvements.',
        'Behavioral Support: Addressing lifestyle factors and creating sustainable habits for long-term weight maintenance.'
      ]}
      benefits={[
        'Reduced stress on joints and spine',
        'Decreased risk of diabetes and heart disease',
        'Improved mobility and activity level',
        'Enhanced quality and length of life',
        'Better breathing and stamina',
        'Reduced arthritis pain',
        'Improved overall health markers',
        'Increased energy and playfulness'
      ]}
      whyChooseUs="Weight loss can be challenging, especially for pets with mobility issues or joint pain that make traditional exercise difficult. Our specialized approach uses therapeutic modalities that allow safe, effective exercise even for pets with significant weight-related health problems. The underwater treadmill is particularly effective, as the buoyancy reduces joint stress while providing excellent cardiovascular conditioning. We understand that weight loss is a journey requiring patience and support. Our team celebrates every milestone with you and adjusts programs as your pet progresses, ensuring continued success and maintaining motivation throughout the process."
    />
  );
}

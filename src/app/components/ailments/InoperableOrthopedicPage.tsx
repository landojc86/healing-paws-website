import { AilmentDetailTemplate } from './AilmentDetailTemplate';
import { Shield } from 'lucide-react';

export function InoperableOrthopedicPage() {
  return (
    <AilmentDetailTemplate
      title="Inoperable Orthopedic Conditions"
      subtitle="Conservative management when surgery isn't an option"
      description="Not all orthopedic conditions can be treated surgically, whether due to your pet's age, health status, financial constraints, or the nature of the condition itself. When surgery isn't an option, rehabilitation becomes the primary treatment approach. Our conservative management programs are designed to provide pain relief, improve function, and enhance quality of life without surgical intervention. We've helped countless pets live comfortably and actively despite conditions that cannot be surgically corrected."
      Icon={Shield}
      color="bg-gradient-to-br from-[#b48cbf] to-[#b7e1da]"
      seoTitle="Non-Surgical Pet Orthopedic Treatment"
      seoDescription="Conservative management for inoperable orthopedic conditions in Fort Lauderdale. Pain relief & mobility support without surgery."
      seoCanonical="/common-ailments/inoperable-orthopedic"
      seoKeywords="non-surgical pet treatment Fort Lauderdale, conservative orthopedic management Oakland Park, inoperable pet conditions, pet pain management Fort Lauderdale"
      symptoms={[
        'Chronic lameness or limping',
        'Joint pain and stiffness',
        'Reduced range of motion',
        'Muscle atrophy or weakness',
        'Difficulty with normal activities',
        'Reluctance to exercise',
        'Compensatory movement patterns',
        'Progressive mobility decline'
      ]}
      treatments={[
        'Multimodal Pain Management: Combining laser therapy, acupuncture, therapeutic ultrasound, and other modalities to address pain from multiple angles.',
        'Strengthening Programs: Building supporting musculature to compensate for damaged or unstable structures.',
        'Joint Stabilization Exercises: Targeted movements to improve joint support through enhanced muscle control.',
        'Hydrotherapy: Low-impact exercise that maintains fitness and muscle mass while minimizing stress on damaged joints.',
        'Manual Therapy: Soft tissue mobilization and joint mobilization to maintain flexibility and reduce compensatory tension.',
        'Assistive Devices: Evaluation for braces, supports, or other devices that may provide additional stability or pain relief.'
      ]}
      benefits={[
        'Significant pain reduction',
        'Improved mobility and function',
        'Enhanced quality of life without surgery',
        'Maintained muscle strength',
        'Reduced reliance on pain medications',
        'Prevention of further deterioration',
        'Ability to remain active',
        'Cost-effective long-term management'
      ]}
      whyChooseUs="When surgery isn't possible, many pet owners feel they have no options. We're here to show you that conservative management through rehabilitation can be highly effective. Our team specializes in creating comprehensive treatment plans that address pain, maintain function, and optimize quality of life without surgery. We use evidence-based therapeutic modalities proven to manage orthopedic conditions conservatively. Many of our patients with inoperable conditions live comfortable, active lives for years with ongoing rehabilitation support. We work closely with you to develop realistic goals and create sustainable long-term management strategies."
    />
  );
}

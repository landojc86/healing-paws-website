import { AilmentDetailTemplate } from './AilmentDetailTemplate';
import { Stethoscope } from 'lucide-react';

export function PostOrthopedicSurgeryPage() {
  return (
    <AilmentDetailTemplate
      title="Post-Orthopedic Surgery"
      subtitle="Accelerated recovery after knee, hip, elbow, shoulder, and back surgery"
      description="Recovery from orthopedic surgery is a critical period that significantly impacts your pet's long-term outcomes. Whether your pet has undergone cranial cruciate ligament (CCL/ACL) repair, hip surgery for dysplasia, fracture repair, or other orthopedic procedures, structured rehabilitation is essential for optimal healing. Our post-surgical rehabilitation programs accelerate recovery, restore function, prevent complications, and help your pet return to normal activities safely and efficiently."
      Icon={Stethoscope}
      color="bg-gradient-to-br from-[#b48cbf] to-[#b7e1da]"
      seoTitle="Post-Orthopedic Surgery Rehabilitation for Pets"
      seoDescription="Expert post-surgery rehab in Fort Lauderdale. Accelerate recovery after CCL, hip, or orthopedic surgery with physical therapy & laser treatment."
      seoCanonical="/common-ailments/post-orthopedic-surgery"
      seoKeywords="post surgery rehab dogs Fort Lauderdale, pet orthopedic surgery recovery Oakland Park, CCL surgery recovery, hip surgery rehabilitation pets"
      symptoms={[
        'Post-surgical swelling and inflammation',
        'Limited range of motion',
        'Muscle atrophy or weakness',
        'Limping or non-weight bearing',
        'Scar tissue formation',
        'Compensatory gait patterns',
        'Reduced activity tolerance',
        'Stiffness after rest'
      ]}
      treatments={[
        'Phase-Based Rehabilitation: Structured programs that progress through inflammation control, range of motion restoration, strengthening, and return to function phases.',
        'Cryotherapy & Heat Therapy: Strategic use of cold and heat to manage inflammation, reduce pain, and promote healing.',
        'Laser Therapy: Accelerates tissue healing, reduces post-surgical inflammation, and manages incisional pain.',
        'Underwater Treadmill: Controlled weight-bearing exercise in water to rebuild strength while protecting healing tissues.',
        'Manual Therapy: Scar tissue mobilization, joint mobilization, and gentle stretching to restore normal movement patterns.',
        'Progressive Strengthening: Carefully designed exercise progressions that rebuild muscle and restore function without compromising surgical repairs.'
      ]}
      benefits={[
        'Faster recovery and return to function',
        'Reduced post-surgical complications',
        'Minimized muscle atrophy',
        'Improved surgical outcomes',
        'Better long-term joint function',
        'Reduced formation of problematic scar tissue',
        'Prevention of compensatory injuries',
        'Restored normal movement patterns'
      ]}
      whyChooseUs="Post-surgical rehabilitation isn't optional—it's essential for achieving the best possible outcome from your pet's surgery. Our team has extensive experience working with orthopedic surgeons to implement evidence-based rehabilitation protocols. We begin therapy as soon as your surgeon approves, typically within days of surgery, to minimize complications and optimize healing. Each program is customized to your pet's specific procedure, healing timeline, and individual needs. We maintain close communication with your surgeon throughout the recovery process to ensure coordinated, comprehensive care."
    />
  );
}

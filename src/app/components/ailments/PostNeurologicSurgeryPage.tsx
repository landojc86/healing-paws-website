import { AilmentDetailTemplate } from './AilmentDetailTemplate';
import { Activity } from 'lucide-react';

export function PostNeurologicSurgeryPage() {
  return (
    <AilmentDetailTemplate
      title="Post-Neurologic Surgery"
      subtitle="Specialized rehabilitation for spinal and neurological surgery recovery"
      description="Neurological surgery recovery requires specialized rehabilitation to promote nerve healing, restore motor function, and help pets regain mobility. Whether your pet has undergone surgery for herniated discs (IVDD), degenerative myelopathy, or other spinal conditions, our neurological rehabilitation programs are designed to maximize recovery potential. We use targeted therapies to stimulate nerve function, prevent complications, and help your pet achieve the best possible outcome."
      Icon={Activity}
      color="bg-gradient-to-br from-[#b7e1da] to-[#b48cbf]"
      seoTitle="Post-Neurologic Surgery Rehabilitation for Pets"
      seoDescription="Specialized neuro rehab in Fort Lauderdale. Help pets recover from spinal surgery with hydrotherapy, nerve stimulation & balance training."
      seoCanonical="/common-ailments/post-neurologic-surgery"
      seoKeywords="neurologic surgery recovery dogs Fort Lauderdale, spinal surgery rehab pets Oakland Park, IVDD surgery recovery, pet neurology rehabilitation"
      symptoms={[
        'Weakness or paralysis in limbs',
        'Loss of coordination or balance',
        'Difficulty standing or walking',
        'Dragging of paws or limbs',
        'Loss of deep pain sensation',
        'Incontinence or difficulty controlling bladder/bowels',
        'Muscle atrophy in affected limbs',
        'Abnormal reflexes or muscle tone'
      ]}
      treatments={[
        'Neuromuscular Electrical Stimulation (NMES): Electrical stimulation to maintain muscle mass, prevent atrophy, and stimulate nerve pathways during recovery.',
        'Hydrotherapy: Buoyancy-assisted movement that allows early mobilization while supporting weakened limbs and promoting neurological recovery.',
        'Balance & Proprioception Training: Specialized exercises using balance boards, cavaletti poles, and therapeutic balls to retrain body awareness and coordination.',
        'Assisted Standing & Walking: Supportive harnesses and slings to facilitate weight-bearing and normal movement patterns.',
        'Laser Therapy: Reduces inflammation around surgical sites and promotes nerve healing.',
        'Range of Motion & Stretching: Prevents contractures and maintains joint flexibility during recovery.'
      ]}
      benefits={[
        'Enhanced nerve regeneration and function',
        'Improved motor control and coordination',
        'Prevention of muscle atrophy',
        'Faster return to mobility',
        'Reduced risk of pressure sores',
        'Better bladder and bowel control',
        'Improved quality of life',
        'Maximized recovery potential'
      ]}
      whyChooseUs="Neurological recovery is a journey that requires patience, expertise, and specialized care. Our team understands the unique challenges of neurological rehabilitation and creates comprehensive programs that address both the physical and functional aspects of recovery. We begin therapy early in the recovery process to prevent complications and maximize nerve healing. Our facility is equipped with specialized equipment including underwater treadmills, balance equipment, and assistive devices designed specifically for neurological patients. We celebrate every milestone with you, from the first voluntary movement to regaining full mobility."
    />
  );
}

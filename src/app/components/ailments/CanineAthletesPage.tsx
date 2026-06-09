import { AilmentDetailTemplate } from './AilmentDetailTemplate';
import { Activity } from 'lucide-react';

export function CanineAthletesPage() {
  return (
    <AilmentDetailTemplate
      title="Agility/Strengthening/Conditioning for Canine Athletes"
      subtitle="Peak performance programs for working dogs and athletic pets"
      description="Working dogs, agility competitors, hunting dogs, and other canine athletes require specialized conditioning programs to optimize performance, prevent injuries, and maintain peak physical condition. Just like human athletes, canine athletes benefit from structured training that builds strength, improves cardiovascular fitness, enhances flexibility, and develops sport-specific skills. Our performance conditioning programs are designed to help your athletic dog reach their full potential while reducing injury risk."
      Icon={Activity}
      color="bg-gradient-to-br from-[#b7e1da] to-[#b48cbf]"
      seoTitle="Canine Athlete Conditioning & Performance Training"
      seoDescription="Expert conditioning for athletic dogs in Fort Lauderdale. Optimize performance, prevent injuries & build strength for agility & working dogs."
      seoCanonical="/common-ailments/canine-athletes"
      seoKeywords="dog agility training Fort Lauderdale, canine conditioning Oakland Park, working dog fitness, athletic dog training, dog performance conditioning Fort Lauderdale"
      symptoms={[
        'Decreased performance or speed',
        'Reluctance during specific activities',
        'Minor strains or recurring injuries',
        'Reduced stamina or endurance',
        'Slower recovery between events',
        'Loss of jumping height or accuracy',
        'Decreased flexibility or range of motion',
        'Muscle imbalances or weaknesses'
      ]}
      treatments={[
        'Sport-Specific Conditioning: Tailored exercise programs that mimic the movements and demands of your dog\'s specific sport or work.',
        'Strength Training: Progressive resistance exercises to build power, speed, and muscular endurance.',
        'Cardiovascular Conditioning: Underwater treadmill and land-based cardio programs to improve stamina and recovery.',
        'Agility & Coordination Drills: Specialized equipment and exercises to enhance body awareness, reaction time, and precision.',
        'Flexibility & Core Training: Stretching and stabilization exercises to improve range of motion and prevent injuries.',
        'Recovery Protocols: Laser therapy and other modalities to enhance recovery and prevent overtraining.'
      ]}
      benefits={[
        'Enhanced athletic performance',
        'Reduced injury risk',
        'Improved strength and power',
        'Greater endurance and stamina',
        'Better flexibility and range of motion',
        'Faster recovery between activities',
        'Prolonged athletic career',
        'Optimized competitive performance'
      ]}
      whyChooseUs="Athletic dogs deserve the same level of professional conditioning that human athletes receive. Our team understands the unique demands placed on working and sporting dogs and creates programs that enhance performance while prioritizing long-term health. We work with handlers, trainers, and owners to develop conditioning programs that complement your training schedule and competition calendar. Our facility features specialized equipment including underwater treadmills, balance equipment, and agility obstacles designed for athletic conditioning. Whether you're preparing for competition season or maintaining off-season fitness, we help your canine athlete perform at their best."
    />
  );
}

# Healing Paws Astro routes with named HTML output

The source page files now use subject-matching names instead of nested `index.astro` files. Astro is also configured with `build: { format: 'file' }`, so `npm run build` outputs subject-matching `.html` files in `dist/`.

| Route | Source page | Built HTML file | Subject |
|---|---|---|---|
| `/about` | `src/pages/about.astro` | `dist/about.html` | About |
| `/blog/degenerative-myelopathy-in-dogs` | `src/pages/blog/degenerative-myelopathy-in-dogs.astro` | `dist/blog/degenerative-myelopathy-in-dogs.html` | Blog / Degenerative Myelopathy In Dogs |
| `/blog/fecal-microbiome-transplants` | `src/pages/blog/fecal-microbiome-transplants.astro` | `dist/blog/fecal-microbiome-transplants.html` | Blog / Fecal Microbiome Transplants |
| `/blog/innovative-care-feature` | `src/pages/blog/innovative-care-feature.astro` | `dist/blog/innovative-care-feature.html` | Blog / Innovative Care Feature |
| `/blog/laser-therapy-fort-lauderdale` | `src/pages/blog/laser-therapy-fort-lauderdale.astro` | `dist/blog/laser-therapy-fort-lauderdale.html` | Blog / Laser Therapy Fort Lauderdale |
| `/blog/local-love-fort-lauderdale-magazine` | `src/pages/blog/local-love-fort-lauderdale-magazine.astro` | `dist/blog/local-love-fort-lauderdale-magazine.html` | Blog / Local Love Fort Lauderdale Magazine |
| `/blog/pet-insurance` | `src/pages/blog/pet-insurance.astro` | `dist/blog/pet-insurance.html` | Blog / Pet Insurance |
| `/blog/rehabilitation-after-canine-knee-surgery` | `src/pages/blog/rehabilitation-after-canine-knee-surgery.astro` | `dist/blog/rehabilitation-after-canine-knee-surgery.html` | Blog / Rehabilitation After Canine Knee Surgery |
| `/blog/treating-ivdd-with-acupuncture` | `src/pages/blog/treating-ivdd-with-acupuncture.astro` | `dist/blog/treating-ivdd-with-acupuncture.html` | Blog / Treating Ivdd With Acupuncture |
| `/blog/treating-kidney-disease-naturally` | `src/pages/blog/treating-kidney-disease-naturally.astro` | `dist/blog/treating-kidney-disease-naturally.html` | Blog / Treating Kidney Disease Naturally |
| `/blog/treating-laryngeal-paralysis-naturally` | `src/pages/blog/treating-laryngeal-paralysis-naturally.astro` | `dist/blog/treating-laryngeal-paralysis-naturally.html` | Blog / Treating Laryngeal Paralysis Naturally |
| `/blog/treating-pet-allergies-naturally` | `src/pages/blog/treating-pet-allergies-naturally.astro` | `dist/blog/treating-pet-allergies-naturally.html` | Blog / Treating Pet Allergies Naturally |
| `/blog/vitamin-d-levels` | `src/pages/blog/vitamin-d-levels.astro` | `dist/blog/vitamin-d-levels.html` | Blog / Vitamin D Levels |
| `/blog` | `src/pages/blog.astro` | `dist/blog.html` | Blog |
| `/common-ailments/arthritis` | `src/pages/common-ailments/arthritis.astro` | `dist/common-ailments/arthritis.html` | Common Ailments / Arthritis |
| `/common-ailments/canine-athletes` | `src/pages/common-ailments/canine-athletes.astro` | `dist/common-ailments/canine-athletes.html` | Common Ailments / Canine Athletes |
| `/common-ailments/ccl-injury` | `src/pages/common-ailments/ccl-injury.astro` | `dist/common-ailments/ccl-injury.html` | Common Ailments / Ccl Injury |
| `/common-ailments/hip-elbow-dysplasia` | `src/pages/common-ailments/hip-elbow-dysplasia.astro` | `dist/common-ailments/hip-elbow-dysplasia.html` | Common Ailments / Hip Elbow Dysplasia |
| `/common-ailments/inoperable-orthopedic` | `src/pages/common-ailments/inoperable-orthopedic.astro` | `dist/common-ailments/inoperable-orthopedic.html` | Common Ailments / Inoperable Orthopedic |
| `/common-ailments/obesity` | `src/pages/common-ailments/obesity.astro` | `dist/common-ailments/obesity.html` | Common Ailments / Obesity |
| `/common-ailments/post-neurologic-surgery` | `src/pages/common-ailments/post-neurologic-surgery.astro` | `dist/common-ailments/post-neurologic-surgery.html` | Common Ailments / Post Neurologic Surgery |
| `/common-ailments/post-orthopedic-surgery` | `src/pages/common-ailments/post-orthopedic-surgery.astro` | `dist/common-ailments/post-orthopedic-surgery.html` | Common Ailments / Post Orthopedic Surgery |
| `/common-ailments/post-tplo-tta-ccl-surgery` | `src/pages/common-ailments/post-tplo-tta-ccl-surgery.astro` | `dist/common-ailments/post-tplo-tta-ccl-surgery.html` | Common Ailments / Post Tplo Tta Ccl Surgery |
| `/common-ailments/senior-neurologic` | `src/pages/common-ailments/senior-neurologic.astro` | `dist/common-ailments/senior-neurologic.html` | Common Ailments / Senior Neurologic |
| `/common-ailments/senior-patients` | `src/pages/common-ailments/senior-patients.astro` | `dist/common-ailments/senior-patients.html` | Common Ailments / Senior Patients |
| `/common-ailments/skin-allergies` | `src/pages/common-ailments/skin-allergies.astro` | `dist/common-ailments/skin-allergies.html` | Common Ailments / Skin Allergies |
| `/common-ailments/spinal-injury` | `src/pages/common-ailments/spinal-injury.astro` | `dist/common-ailments/spinal-injury.html` | Common Ailments / Spinal Injury |
| `/common-ailments` | `src/pages/common-ailments.astro` | `dist/common-ailments.html` | Common Ailments |
| `/courses` | `src/pages/courses.astro` | `dist/courses.html` | Courses |
| `/` | `src/pages/index.astro` | `dist/index.html` | Home |
| `/services/acupuncture` | `src/pages/services/acupuncture.astro` | `dist/services/acupuncture.html` | Services / Acupuncture |
| `/services/cancer-treatment` | `src/pages/services/cancer-treatment.astro` | `dist/services/cancer-treatment.html` | Services / Cancer Treatment |
| `/services/fmbrt` | `src/pages/services/fmbrt.astro` | `dist/services/fmbrt.html` | Services / Fmbrt |
| `/services/herbal-therapy` | `src/pages/services/herbal-therapy.astro` | `dist/services/herbal-therapy.html` | Services / Herbal Therapy |
| `/services/homeopathy` | `src/pages/services/homeopathy.astro` | `dist/services/homeopathy.html` | Services / Homeopathy |
| `/services/inflammatory-screening` | `src/pages/services/inflammatory-screening.astro` | `dist/services/inflammatory-screening.html` | Services / Inflammatory Screening |
| `/services/integrative-holistic` | `src/pages/services/integrative-holistic.astro` | `dist/services/integrative-holistic.html` | Services / Integrative Holistic |
| `/services/laser-therapy` | `src/pages/services/laser-therapy.astro` | `dist/services/laser-therapy.html` | Services / Laser Therapy |
| `/services/mistletoe-therapy` | `src/pages/services/mistletoe-therapy.astro` | `dist/services/mistletoe-therapy.html` | Services / Mistletoe Therapy |
| `/services/orthotics-prosthetics` | `src/pages/services/orthotics-prosthetics.astro` | `dist/services/orthotics-prosthetics.html` | Services / Orthotics Prosthetics |
| `/services/ozone-therapy` | `src/pages/services/ozone-therapy.astro` | `dist/services/ozone-therapy.html` | Services / Ozone Therapy |
| `/services/physical-therapy` | `src/pages/services/physical-therapy.astro` | `dist/services/physical-therapy.html` | Services / Physical Therapy |
| `/services/shockwave-therapy` | `src/pages/services/shockwave-therapy.astro` | `dist/services/shockwave-therapy.html` | Services / Shockwave Therapy |
| `/services/therapeutic-exercise` | `src/pages/services/therapeutic-exercise.astro` | `dist/services/therapeutic-exercise.html` | Services / Therapeutic Exercise |
| `/services/underwater-treadmill` | `src/pages/services/underwater-treadmill.astro` | `dist/services/underwater-treadmill.html` | Services / Underwater Treadmill |
| `/services/vitamin-c-therapy` | `src/pages/services/vitamin-c-therapy.astro` | `dist/services/vitamin-c-therapy.html` | Services / Vitamin C Therapy |
| `/services/wheelchairs-mobility` | `src/pages/services/wheelchairs-mobility.astro` | `dist/services/wheelchairs-mobility.html` | Services / Wheelchairs Mobility |
| `/services` | `src/pages/services.astro` | `dist/services.html` | Services |
| `/store` | `src/pages/store.astro` | `dist/store.html` | Store |
| `/team/dr-danielle-barberini` | `src/pages/team/dr-danielle-barberini.astro` | `dist/team/dr-danielle-barberini.html` | Team / Dr Danielle Barberini |
| `/team/dr-jessica-dreyfuss` | `src/pages/team/dr-jessica-dreyfuss.astro` | `dist/team/dr-jessica-dreyfuss.html` | Team / Dr Jessica Dreyfuss |
| `/videos` | `src/pages/videos.astro` | `dist/videos.html` | Videos |
| `/wireframe` | `src/pages/wireframe.astro` | `dist/wireframe.html` | Wireframe |

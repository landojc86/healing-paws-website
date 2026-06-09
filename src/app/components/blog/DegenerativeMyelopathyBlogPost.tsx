import { Header } from '../Header';
import { Footer } from '../Footer';
import { Calendar, User, ArrowLeft, Activity, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import degen from '../../../imports/degen.jpg?url';

export function DegenerativeMyelopathyBlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#b7e1da] to-[#b48cbf] mt-[140px] md:mt-[80px] pt-12 sm:pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Activity className="w-4 h-4 text-white" />
              <span className="text-white text-lg font-medium">Treatment Modalities</span>
            </div>
            <h1 className="text-white mb-6 text-4xl sm:text-5xl leading-tight">
              Degenerative Myelopathy in Dogs – What Can You Do?
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90 text-lg">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Dr. Jessie Dreyfuss, DVM, CVA, CCRT</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>August 22, 2018</span>
              </div>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src={degen}
            alt="Degenerative Myelopathy in Dogs"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is DM?</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Degenerative myelopathy (DM) in dogs is a condition caused by a mutated gene that leads to breakdown or degeneration of the white matter of the spinal cord. It is slowly progressive and very similar to ALS in humans.
          </p>
          <div className="bg-gradient-to-r from-[#b7e1da]/20 to-[#b48cbf]/20 rounded-lg p-6 border-l-4 border-[#b48cbf]">
            <p className="text-gray-900 font-semibold text-lg">
              <strong>Key Finding:</strong> There is no cure, but <strong>regular, frequent physical therapy (including land-based exercises and hydrotherapy) has been shown to increase survival times in dogs!</strong> This is the only research-based evidence to help affected pets.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mt-6 text-lg">
            Additional therapies mentioned include diet changes, herbal treatments, canine massage, electro-acupuncture, nerve regenerating supplements, and anti-oxidant supplements.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Signs of DM</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Early symptoms owners may notice:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#b48cbf] flex-shrink-0 mt-1" />
              <span className="text-gray-700 text-lg">Crossing back legs when walking</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#b48cbf] flex-shrink-0 mt-1" />
              <span className="text-gray-700 text-lg">Swaying gait</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#b48cbf] flex-shrink-0 mt-1" />
              <span className="text-gray-700 text-lg">Knuckling of hindlimbs</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#b48cbf] flex-shrink-0 mt-1" />
              <span className="text-gray-700 text-lg">Loss of coordination (ataxia)</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#b48cbf] flex-shrink-0 mt-1" />
              <span className="text-gray-700 text-lg">Weakness and muscle loss</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#b48cbf] flex-shrink-0 mt-1" />
              <span className="text-gray-700 text-lg">Scuffing toenails</span>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            While historically considered non-painful, these dogs often develop trigger points and sore areas from their altered gait, requiring pain management.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Diagnosis</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Diagnosis is challenging as many conditions present similarly. A DNA test (blood or saliva) exists for the gene mutation. Veterinarians typically start with bloodwork and x-rays, possibly advancing to CT or MRI scans.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">At-Risk Breeds</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Most commonly affects older German Shepherd Dogs, Bernese Mountain Dogs, and Pembroke Welsh Corgis. Extremely uncommon in cats with no sex predisposition.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Treatment Options at Healing Paws Center</h2>

          <div className="bg-[#b7e1da]/20 rounded-lg p-6 mb-6 border-l-4 border-[#b48cbf]">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Physical Therapy</h3>
            <p className="text-gray-700 text-lg mb-4">
              The only research-backed treatment. A cited study showed dogs receiving physiotherapy had <strong>almost 5 times the survival time of dogs who didn't receive physical therapy</strong> and remained ambulatory much longer.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Other Interventions:</h3>
          <ul className="space-y-4 mb-6">
            <li className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Acupuncture</h4>
              <p className="text-gray-700 text-lg">For nerve stimulation and pain relief</p>
            </li>
            <li className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Nutritional Counseling</h4>
              <p className="text-gray-700 text-lg">Focused on maintaining healthy weight and high anti-oxidant foods</p>
            </li>
            <li className="bg-white rounded-lg p-4 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Herbal Therapy and Supplements</h4>
              <p className="text-gray-700 text-lg">Targeted support for nerve health and overall wellness</p>
            </li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            The article emphasizes individualized care plans tailored to each dog's specific needs.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#b48cbf] to-[#b7e1da] rounded-2xl p-10 my-16 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-4">Help Your Dog with Degenerative Myelopathy</h3>
          <p className="text-white/95 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a consultation to create a personalized physical therapy and holistic care plan for your dog.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://booking.getoliver.com/7d580852-f683-4dc2-adf2-645784b255f9?redirect=pets"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-[#b48cbf] px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-bold shadow-lg text-lg"
            >
              Book Appointment
            </a>
            <Link
              to="/services/therapeutic-exercise"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-bold text-lg"
            >
              Learn About Physical Therapy
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}

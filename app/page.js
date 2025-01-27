'use client';
import { useState } from 'react';

export default function ResumePage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-muted-foreground p-2"
            onClick={() => setSelectedImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img 
            src={selectedImage} 
            alt="Full size" 
            className="max-w-full max-h-[90vh] object-contain"
          />
        </div>
      )}

      <div className="container mx-auto px-4 py-16 space-y-24">
        {/* Header */}
        <header className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            AI Necklace Image Generation Development Report
          </h1>
          <p className="text-xl text-muted-foreground">
            Date: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </header>

        {/* Main Limitation - Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-destructive/5 to-warning/5 rounded-3xl" />
          <div className="relative bg-card/60 backdrop-blur-sm rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-semibold mb-8">Current Limitations</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Hardware Limitations */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1.5 text-sm font-semibold rounded-full bg-destructive/15 text-destructive">
                    Hardware
                  </span>
                  <h3 className="text-xl font-medium">Hardware Limitations</h3>
                </div>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground text-lg">
                  <li>RTX 4090 training is limited to 24GB VRAM</li>
                  <li>Maximum image training size is 1280px</li>
                  <li>Cannot fully utilize 4K resolution dataset</li>
                </ul>
              </div>

              {/* Quality Impact */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1.5 text-sm font-semibold rounded-full bg-warning/15 text-warning-foreground">
                    Quality
                  </span>
                  <h3 className="text-xl font-medium">Impact</h3>
                </div>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground text-lg">
                  <li>Incomplete image details</li>
                  <li>AI cannot capture all fine details</li>
                  <li>
                    AI fills in missing information:
                    <ul className="list-circle pl-6 mt-2 space-y-2">
                      <li>Overall shape may be similar</li>
                      <li>Details may not match the original</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Past Success */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-success/5 to-success/3 rounded-3xl" />
          <div className="relative bg-card/60 backdrop-blur-sm rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-semibold mb-8">Completed Project: Necklace Render Style</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-success/15 text-success flex items-center justify-center font-semibold text-lg shadow-sm">1</span>
                  <h4 className="text-xl font-medium">Start from Dataset</h4>
                </div>
                <div 
                  className="aspect-square rounded-2xl bg-muted/50 overflow-hidden cursor-pointer group/image relative shadow-lg transition-all duration-300 ease-out hover:shadow-xl"
                  onClick={() => setSelectedImage("/data/Spiky silver wide_0193d3e1-0d01-766a-a5a3-1d963637223f.original.00_00_00_11.Still001.png")}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                  <img
                    src="/data/Spiky silver wide_0193d3e1-0d01-766a-a5a3-1d963637223f.original.00_00_00_11.Still001.png"
                    alt="Dataset used for training"
                    className="w-full h-full object-contain bg-black/50 transition-transform duration-500 ease-out group-hover/image:scale-[1.02]"
                  />
                  <div className="absolute -bottom-full group-hover/image:bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-black/40 backdrop-blur-sm p-4 transition-all duration-300">
                    <p className="text-white text-sm font-medium">Click to view full size</p>
                  </div>
                </div>
                <div className="bg-card/40 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Use images with the exact angle needed to highlight the details of the necklace, without any other elements interfering
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-success/15 text-success flex items-center justify-center font-semibold text-lg shadow-sm">2</span>
                  <h4 className="text-xl font-medium">Create image with AI</h4>
                </div>
                <div 
                  className="aspect-square rounded-2xl bg-muted/50 overflow-hidden cursor-pointer group/image relative shadow-lg transition-all duration-300 ease-out hover:shadow-xl"
                  onClick={() => setSelectedImage("/data/LoRa_00022_.png")}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                  <img
                    src="/data/LoRa_00022_.png"
                    alt="First image created by AI"
                    className="w-full h-full object-contain bg-black/50 transition-transform duration-500 ease-out group-hover/image:scale-[1.02]"
                  />
                  <div className="absolute -bottom-full group-hover/image:bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-black/40 backdrop-blur-sm p-4 transition-all duration-300">
                    <p className="text-white text-sm font-medium">Click to view full size</p>
                  </div>
                </div>
                <div className="bg-card/40 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Got close structure but still lacks some important details
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-success/15 text-success flex items-center justify-center font-semibold text-lg shadow-sm">3</span>
                  <h4 className="text-xl font-medium">Adjust and Upscale</h4>
                </div>
                <div 
                  className="aspect-square rounded-2xl bg-muted/50 overflow-hidden cursor-pointer group/image relative shadow-lg transition-all duration-300 ease-out hover:shadow-xl"
                  onClick={() => setSelectedImage("/data/Gold.png")}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                  <img
                    src="/data/Gold.png"
                    alt="Final result"
                    className="w-full h-full object-contain bg-black/50 transition-transform duration-500 ease-out group-hover/image:scale-[1.02]"
                  />
                  <div className="absolute -bottom-full group-hover/image:bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-black/40 backdrop-blur-sm p-4 transition-all duration-300">
                    <p className="text-white text-sm font-medium">Click to view full size</p>
                  </div>
                </div>
                <div className="bg-card/40 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Use magnific.ai to add details, with retouching and adjustments until you get a complete result
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Details */}
            <div className="mt-12 bg-card/40 backdrop-blur-sm rounded-2xl p-8">
              <div className="space-y-4">
                <h4 className="text-xl font-medium text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-success"></span>
                  Dataset Limitations
                </h4>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                  <li>Despite being limited to 1280px, AI can capture necklace details well because:
                    <ul className="list-circle pl-6 mt-2 space-y-2">
                      <li>Dataset images show only the necklace in desired angles, allowing Lora model to learn complete details</li>
                      <li>The necklace is the main element, making 1280px resolution sufficient for learning</li>
                      <li>No other elements interfere with AI learning</li>
                    </ul>
                  </li>
                  <li>Upscaling with magnific.ai works well because:
                    <ul className="list-circle pl-6 mt-2 space-y-2">
                      <li>Initial details are clear enough for upscaling</li>
                      <li>AI can accurately imagine missing details due to clear source data</li>
                    </ul>
                  </li>
                  <li>Easy to retouch and adjust as main structure and details are correct</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Current Research */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-500/3 rounded-3xl" />
          <div className="relative bg-card/60 backdrop-blur-sm rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-semibold mb-8">Current Research: Neck Area Image Style</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Dataset */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-600 flex items-center justify-center font-semibold text-lg shadow-sm">1</span>
                  <h4 className="text-xl font-medium">Dataset used</h4>
                </div>
                <div 
                  className="aspect-square rounded-2xl bg-muted/50 overflow-hidden cursor-pointer group/image relative shadow-lg transition-all duration-300 ease-out hover:shadow-xl"
                  onClick={() => setSelectedImage("/data/7.png")}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                  <img
                    src="/data/7.png"
                    alt="Necklace area image"
                    className="w-full h-full object-contain bg-black/50 transition-transform duration-500 ease-out group-hover/image:scale-[1.02]"
                  />
                  <div className="absolute -bottom-full group-hover/image:bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-black/40 backdrop-blur-sm p-4 transition-all duration-300">
                    <p className="text-white text-sm font-medium">Click to view full size</p>
                  </div>
                </div>
                <div className="bg-card/40 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The image highlights the necklace area, making the necklace smaller in the image, affecting AI's perception of details
                  </p>
                </div>
              </div>

              {/* Current Results */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-600 flex items-center justify-center font-semibold text-lg shadow-sm">2</span>
                  <h4 className="text-xl font-medium">Experiment results</h4>
                </div>
                <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Experimenting - the results obtained were:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                      <li>The necklace is larger than the actual size, but the shape of the necklace is correct when the Weight of the lora model is increased</li>
                      <li>When the Weight is lowered, the size is correct but the details are not correct at all</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-card/40 backdrop-blur-sm rounded-xl p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Still need to find the balance between Weight of the model to get both size and details correct
                  </p>
                </div>
              </div>
            </div>

            {/* Research Details */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              {/* Limitations */}
              <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-medium text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Found Limitations
                  </h4>
                  <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
                    <li>With 1280px training limitation for Lora model:
                      <ul className="list-circle pl-6 mt-2 space-y-2">
                        <li>AI captures fewer necklace details due to its smaller size in the image, compared to the Render Style project where the necklace was the main element</li>
                        <li>Cannot recognize specific diamond setting characteristics, unlike the Success Story case where details were clearly visible</li>
                      </ul>
                    </li>
                    <li>Model Weight adjustment affects quality:
                      <ul className="list-circle pl-6 mt-2 space-y-2">
                        <li>High Weight: Correct shape but oversized</li>
                        <li>Low Weight: Correct size but incomplete details</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Possible Solution */}
              <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-medium text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Possible Solutions
                  </h4>
                  <div className="space-y-6">
                    <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20 space-y-6">
                      <div>
                        <h5 className="font-medium text-lg text-blue-700 dark:text-blue-400 mb-3">Spec & Dataset Improvements</h5>
                        <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
                          <li className="space-y-2">
                            <p>Use higher specs than RTX 4090 to support 2048px or higher resolution datasets</p>
                            <ul className="list-circle pl-6 space-y-1 text-sm">
                              <li>Approximately $1-2 per hour for 2048px resolution training</li>
                              <li>Takes about 8 hours per model training</li>
                            </ul>
                          </li>
                          <li className="space-y-2">
                            <p>Increase dataset from current 30 images</p>
                            <ul className="list-circle pl-6 space-y-1 text-sm">
                              <li>Take additional photos from various angles for better AI learning</li>
                            </ul>
                          </li>
                          <li className="space-y-2">
                            <p>Testing may require multiple runs with different configs</p>
                            <ul className="list-circle pl-6 space-y-1 text-sm">
                              <li>Experiment with Weight and other parameters until desired results are achieved</li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Operation Progress */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-violet-500/3 rounded-3xl" />
          <div className="relative bg-card/60 backdrop-blur-sm rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-semibold mb-8">Current Operation Progress</h2>

            <div className="space-y-8">
              <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-medium mb-4">Testing L40s on RunPod</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Currently testing L40s with 48GB VRAM on RunPod.io at $1.03 per hour for higher resolution training. Starting with this cost-effective spec despite availability of higher specs such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>H200 SXM: VRAM 143GB ($3.99 per hour)</li>
                    <li>Mi300x: VRAM 192GB ($2.49 per hour)</li>
                    <li>These specs should support 2048px or higher dataset training</li>
                  </ul>
                  <div className="bg-violet-500/10 rounded-xl p-4 border border-violet-500/20 mt-4">
                    <p className="text-sm">
                      <span className="font-medium">Note:</span> Starting with L40s to evaluate results and cost-effectiveness before considering higher specs
                    </p>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Maximum resolution this spec can handle for the dataset is 1536px, not reaching the desired 2048px but hoping it's sufficient for AI to capture actual necklace details</li>
                    <li>Training time increases slightly compared to RTX 4090 despite higher VRAM</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-medium mb-4">Dataset Improvements</h4>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Increased dataset from 30 to 50 images to provide AI with more learning data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Added 20 new images with various angles</li>
                    <li>Improved training data diversity</li>
                  </ul>
                </div>
              </div>

              <div className="bg-card/40 backdrop-blur-sm rounded-xl p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">Summary:</span> While L40s offers more VRAM than RTX 4090, it's still limited to 1536px resolution, not meeting the desired 2048px target
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            This report is continuously updated with new findings and progress
          </p>
        </div>
      </div>
    </main>
  );
}

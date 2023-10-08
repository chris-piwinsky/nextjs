import React from 'react';
import Image from 'next/image';
import logoImage from './images/cover.png'; 
import MarqueeBar from './components/MarqueeBar/MarqueeBar';
import Layout from './components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <main className="page">
        <div className="flex items-center">
          <div className="flex flex-col">
            <div>
              <h1 className="my-heading">The Salty Curmudgeons</h1>
              <p className="my-paragraph">
                Three entertaining guys sharing life experiences and thoughts on culture, lifestyle, current events, and sports.

                Always entertaining, sometimes controversial, the Salty Curmudgeons share their thoughts on culture, lifestyle, current events, and sports.

                Weve got something to say!  The Salty Curmudgeons share their thoughts on culture, lifestyle, current events, and sports.

                Not afraid to speak their minds, the Salty Curmudgeons share their thoughts on culture, lifestyle, current events, and sports.

                Not afraid to speak their minds, the Salty Curmudgeons share their wisdom & thoughts on culture, lifestyle, current events, and sports.  Sometimes controversial and always entertaining, join us for weekly conversations geared to make you laugh, think, and sometimes feel a little salty!
              </p>
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <div style={{ width: '600px', height: '400px' }}>
              <Image
                src={logoImage}
                alt="Main Image"
                layout="responsive"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </main>
      <MarqueeBar/>
    </Layout>
  )
}

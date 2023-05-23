'use client';
import '../../styles/posts/post.scss';
import LabelCategory from 'src/components/buttons/LabelCategory';
export default function Page() {
  return (
    <div className='container'>
      <div className='section--post'>
        <div className="section__left">
          <div className='post__category'>
            <LabelCategory classNames="label__category-bold" text="technology" />
          </div>
          <h3>
            The Impact of Technology on the Workplace: How Technology is Changing
          </h3>
          <div className="post__author">
            <div className="post__author__left">
              <div className="author__image">
                <img src="https://picsum.photos/200/300" alt="Author" />
              </div>
              <p>Voung 1</p>
              <p>26-06-2001</p>
            </div>
          </div>
          <div className="post__image">
            <img src="https://picsum.photos/700/400" />
          </div>
          <div className="post__description">
            <p>
              Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.<br />
              One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
            </p>
            <h5>
              Plan Your Itinerary
            </h5>
            <p>
              While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.<br />
              Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
            </p>

          </div>
        </div>

        <div className="section__right">
          <div className='post__relative'>
            <div className='post__relative__item'>
              <p className='relative__name'>The Impact of Technology on the Workplace: How Technology is Changing
              </p>
              <img src='https://picsum.photos/200/300' />
            </div>
            <div className='post__relative__item'>
              <p className='relative__name'>The Impact of Technology on the Workplace: How Technology is Changing
              </p>
              <img src='https://picsum.photos/200/300' />
            </div>
            <div className='post__relative__item'>
              <p className='relative__name'>The Impact of Technology on the Workplace: How Technology is Changing
              </p>
              <img src='https://picsum.photos/200/300' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

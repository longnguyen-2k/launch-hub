'use client'

import '../../styles/career/career.scss';
import { Checkbox, Input } from 'antd';
import { AudioOutlined, EnvironmentOutlined } from '@ant-design/icons';
import SectionFilter from 'src/components/filter/TextInputFilter';
import CareerPost from './components/CareerPost';
export default function Page() {
    return (
        <div className='container'>
            <div className='section--career'>
                <div className='section__banner'>
                    <div className="section__banner_image">
                        <img src='https://picsum.photos/400/300' />
                    </div>
                    <div className='section__banner_content'>
                        <h3>
                            Discover hot jobs today
                        </h3>
                        <p>
                            Meet clients you’re excited to work with and take
                            your career or business to new heights.
                        </p>
                    </div>
                </div>
                <div className='section--career_content'>
                    <div className="section__left">
                        <h5>More filters</h5>
                        <div className='section__search_field'>
                            <SectionFilter placeholder={"Search Keyword"} value={null} />
                        </div>
                        <div className="section__work_mode">
                            <h6>Work mode</h6>
                            <div className='work__mode_item'>
                                <div className="group-1">
                                    <div className='group-icon'>
                                        <AudioOutlined />
                                    </div>
                                    <span>
                                        Remote Only
                                    </span>
                                </div>
                                <div className="check-box">
                                    <Checkbox />
                                </div>
                            </div>
                            <div className='work__mode_item'>
                                <div className="group-1">
                                    <div className='group-icon'>
                                        <AudioOutlined />
                                    </div>
                                    <span>
                                        Offline Only
                                    </span>
                                </div>
                                <div className="check-box">
                                    <Checkbox />
                                </div>
                            </div>
                            <div className='work__mode_item'>
                                <div className="group-1">
                                    <div className='group-icon'>
                                        <AudioOutlined />
                                    </div>
                                    <span>
                                        Hybrid Only
                                    </span>
                                </div>
                                <div className="check-box">
                                    <Checkbox />
                                </div>
                            </div>


                        </div>

                        <div className='section__input_field'>
                            <label>
                                Industry
                            </label>
                            <Input
                                type="text"
                                className="v-text-field"
                                placeholder="E.g: Edtech, Fintech"
                            />
                        </div>
                        <div className='section__input_field'>
                            <label>
                                Firm name
                            </label>
                            <Input
                                type="text"
                                className="v-text-field"
                                placeholder="E.g: Edtech, Fintech"
                            />
                        </div>
                        <div className='section__input_field' style={{ borderBottom: '2px solid #E8E8EA', paddingBottom: '24px' }}>
                            <label>
                                Seniority Level
                            </label>
                            <Input
                                type="text"
                                className="v-text-field"
                                placeholder="E.g: Edtech, Fintech"
                            />
                        </div>
                        <div className='section__input_field' style={{ paddingTop: '24px' }} >
                            <label>
                                <EnvironmentOutlined />
                                Country Location
                            </label>
                            <Input
                                type="text"
                                className="v-text-field"
                                placeholder="E.g: Edtech, Fintech"
                            />
                        </div>
                        <div className='section__input_field'>
                            <label>
                                <EnvironmentOutlined />
                                Region Location
                            </label>
                            <Input
                                type="text"
                                className="v-text-field"
                                placeholder="E.g: Edtech, Fintech"
                            />
                        </div>
                        <div className='section__input_field'>
                            <label>
                                <EnvironmentOutlined />
                                City Location
                            </label>
                            <Input
                                type="text"
                                className="v-text-field"
                                placeholder="E.g: Edtech, Fintech"
                            />
                        </div>
                    </div>
                    <div className='section__right'>
                        <div className='section__right-top'>
                            <p>
                                1000 jobs are listed
                            </p>
                        </div>
                        <CareerPost />
                    </div>
                </div>

            </div>
        </div>
    );
}

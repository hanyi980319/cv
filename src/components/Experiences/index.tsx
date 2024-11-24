import { Experience } from '../../types';
import './index.less';

type Props = {
  experiences: Experience[];
};

export default function Experiences(props: Props) {
  const { experiences } = props;

  return (
    <div>
      {experiences.some((experience) => experience.type === 'company') && (
        <div>
          <div className="block-title">工作经历</div>
          {experiences.map((experience, index) => {
            if (experience.type === 'company') {
              return (
                <div key={index} className="experience">
                  <div className="experience-title">
                    <div className="icon-wrapper">
                      <img src={experience.icon} alt="" />
                      <div className="fs-17 font-bold">{experience.company}</div>
                    </div>
                    <div>{experience.time}</div>
                  </div>
                  <div className="font-bold mb-8">{experience.position}</div>
                  <ul>
                    {experience.descriptions.map((description, index) => (
                      <li key={index}>{description}</li>
                    ))}
                  </ul>
                </div>
              );
            }
          })}
        </div>
      )}
      {experiences.some((experience) => experience.type === 'education') && (
        <div>
          <div className="block-title">教育经历</div>
          {experiences.map((experience, index) => {
            if (experience.type === 'education') {
              return (
                <div key={index} className="experience">
                  <div className="experience-title">
                    <div className="icon-wrapper">
                      <img src={experience.icon} alt="" />
                      <div className="fs-17 font-bold">{experience.school}</div>
                    </div>
                    <div>{experience.time}</div>
                  </div>
                  {experience.major !== '' && <div className="font-bold mb-8">{experience.major}</div>}
                  <ul>
                    {experience.descriptions.map((description, index) => (
                      <li key={index}>{description}</li>
                    ))}
                  </ul>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}

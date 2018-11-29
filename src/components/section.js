import React from "react"
import sectionStyles from './section.module.css'

export const LeftSection = ({children, id, feature, divider}) => (
  <section className='fullpage-section' id={id}>
    <div className={sectionStyles.sectionFeatureWrapper}>
      <div className={sectionStyles.sectionFeature}>
        {feature}
      </div>
    </div>
    <div className={sectionStyles.sectionContentWrapper}>
      <div className={sectionStyles.sectionContent}>
        {children}
      </div>
    </div>
    {divider}
  </section>
)

export const RightSection = ({children, id, feature, divider}) => (
  <section className='fullpage-section' id={id}>
    <div className={sectionStyles.sectionContentWrapper}>
      <div className={sectionStyles.sectionContent}>
        {children}
      </div>
    </div>
    <div className={sectionStyles.sectionFeatureWrapper}>
      <div className={sectionStyles.sectionFeature}>
        {feature}
      </div>
    </div>
    {divider}
  </section>
)
import React, { useMemo } from "react";
import DOMPurify from 'dompurify';

// import { graphiteEnabledFeatures } from 'font-detect-rhl';
import graphiteEnabledFeatures from '../../fonts/graphiteEnabledFeatures.json';

// Separating this component helps keep React state management in sync for fontSettings.
export default function FontFeatureSettings(fontFeatureSettingsProps) {
  const {
    featureFont,
    quoteOrNot,
    selectedFont,
    fontSettings,
    handleChangeFeature,
    radioLabelRightMargin,
    radioLabelLeftMargin,
    diffStyle,
  } = fontFeatureSettingsProps;

  const fieldsetLabelStyle = useMemo(() => ({
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
  }),[]);

  const fieldsetLabelMarkStyle = useMemo(() => ({
    backgroundColor: 'lightgreen',
    color: 'Blue',
    padding: '0.11em .21em',
    borderStyle: 'solid solid none solid',
    borderWidth: '2px',
  }),[]);

  const fieldsetStyle = useMemo(() => ({
    borderWidth: '2px',
    borderStyle: 'inset',
    borderColor: 'blue black black blue'
  }),[]);

  const setLabelDivStyle = useMemo(() => ({
    marginRight: radioLabelRightMargin,
    marginLeft: radioLabelLeftMargin,
  }),[radioLabelLeftMargin, radioLabelRightMargin]);

  let count = -1;
  const featureSettings = useMemo(() => graphiteEnabledFeatures.filter((name) => name.name === featureFont).map((font, fontIndex) => (
    <div key={fontIndex}>
      {font.categories.map((categories, categoriesIndex) => {
        return (<div key={categoriesIndex}>
          {font.categories[categoriesIndex].category.map((category, categoryIndex) => {
            return (<div key={categoryIndex}>
              <h1 style={{textAlign: 'center'}}>{font.name}: {category.name}</h1>
              {category.sets.map((sets, setsIndex) => {
                return (<div key={setsIndex}>
                  {category.sets[setsIndex].set.map((set, setIndex) => {
                    return (<div key={setIndex} id={++count}>
                      <label id={set.id}><div style={fieldsetLabelStyle}><mark style={fieldsetLabelMarkStyle}>{set.title}</mark></div></label>
                      <fieldset id={set.name}
                        name={set.name}
                        style={fieldsetStyle}
                      >
                        {set.options.map((option, optionIndex) => {
                          return (<div key={optionIndex}>
                            <label
                              htmlFor={set.name+option.value}
                              style={{ 
                                fontFamily:  quoteOrNot + selectedFont + quoteOrNot,
                                fontFeatureSettings: '"' + set.name + '" ' + option.value,
                                MozFontFeatureSettings: '"' + set.name + '" ' + option.value,
                                WebkitFontFeatureSettings: '"' + set.name + '" ' + option.value
                              }}
                            >
                              <input
                                type="radio"
                                name={set.name}
                                id={set.name+option.value}
                                data-test-id={set.name+option.value}
                                value={option.value}
                                onClick={handleChangeFeature}
                                checked={fontSettings[count].value.toString() === option.value}
                              />
                              {option.tip}
                              <div
                                style={setLabelDivStyle}
                                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(set.label).replaceAll('{diffStyle}', diffStyle) }}
                              />
                            </label>
                          </div>)
                        })}
                      </fieldset>
                    </div>)
                  })}
                </div>)
              })}
            </div>)
          })}
        </div>)
      })}
    </div>
  )), [count, featureFont, fieldsetLabelMarkStyle, fieldsetLabelStyle, fieldsetStyle, fontSettings, handleChangeFeature, quoteOrNot, selectedFont, setLabelDivStyle, diffStyle]);

  return featureSettings;
}
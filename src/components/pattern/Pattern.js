import React from 'react'
import Title from '../title/Title'
import styles from './Pattern.module.css'
import PatternRow from '../pattern-row/PatternRow'
const Pattern = ({ title, difficulty, materials, pattern, isPreview, handleEdit }) => {
    return (
        <div className={isPreview ? styles.patternPreview : styles.patternDisplay}>
            {isPreview ? "" : <Title label={"Your Pattern"} />}
            <p className={styles.label}>{title ? title : ""} <span className={styles.subtext}>{difficulty ? `(difficulty: ${difficulty})` : ""}</span></p>
            {materials && <p className={styles.materials}><span className={styles.materialsTitle}>Materials:</span> {materials}</p>}
            {pattern && pattern.length > 0 ?
                <>
                    <hr className={isPreview ? styles.linePreview : styles.lineDisplay} />
                    {pattern.map((p, index) => (
                        <PatternRow row={p.row} value={p.value} key={index} index={index} id={p.id} isPreview={isPreview} handleEdit={handleEdit} />
                    ))}
                </> : ""
            }
        </div>
    )
}

export default Pattern

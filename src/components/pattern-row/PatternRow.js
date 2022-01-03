import React, { useState } from 'react'
import styles from './PatternRow.module.css';
import { faCheck, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const PatternRow = ({ isPreview, index, row, value, id, handleEdit }) => {
    const [showEdit, setShowEdit] = useState(false);

    return (
        <div>
            <div className={isPreview ? styles.patternRow : ""}>
                {showEdit
                    ? <div className={styles.inputRow}>
                        <input value={row ? row : ""} onChange={(e) => handleEdit(e.target.value, "row", id)} />
                        <input value={value ? value : ""} onChange={(e) => handleEdit(e.target.value, "value", id)} />
                    </div>
                    : <p><span className={styles.rowTitle}>Row {row}.</span> {value}</p>
                }
                {isPreview
                    ? showEdit
                        ? <FontAwesomeIcon icon={faCheck} className={styles.icon} onClick={() => { setShowEdit(!showEdit) }} />
                        : <FontAwesomeIcon icon={faEdit} className={styles.icon} onClick={() => { setShowEdit(!showEdit) }} />
                    : ""
                }
            </div>
        </div>
    )
}

export default PatternRow

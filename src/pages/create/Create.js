import { map } from 'lodash';
import React, { useState, useEffect } from 'react'
import { Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-location';
import { Button } from '../../components/button/Button';
import { v4 as uuidv4 } from 'uuid';
import Pattern from '../../components/pattern/Pattern';
import Title from '../../components/title/Title';
import useFetch from '../../hooks/useFetch';
import styles from './Create.module.css'
const Create = () => {
    const [title, setTitle] = useState('');
    const [pattern, setPattern] = useState([]);
    const [patternInput, setPatternInput] = useState("")
    const [rowInput, setRowInput] = useState("1")
    const [materials, setMaterials] = useState("")
    const [difficulty, setDifficulty] = useState('');
    const [data, , error, postData] = useFetch('http://localhost:3001/patterns', "POST")
    const navigate = useNavigate();
    useEffect(() => {
        if (data && !error) {
            navigate({ to: '/', replace: true })
        }
    }, [data, error, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({ title, pattern, difficulty, materials })
    }

    const handleRowEdit = ( value, name, id ) => {
        const patternCopy = [...pattern];
        const index = patternCopy.findIndex((p) => p.id === id)
        patternCopy[index] = { ...patternCopy[index], [name]: value }
        setPattern(patternCopy)
    }
    const handleRowChange = () => {
        const patternCopy = [...pattern];
        patternCopy.push({ value: patternInput, row: rowInput, id: uuidv4() });
        setPattern(patternCopy);
        setPatternInput("");
        const doubleDigits = parseInt(rowInput.substring(rowInput.length - 2)) > 0 ? true : false
        const lastRowNumber = doubleDigits ? rowInput.substring(rowInput.length - 2, rowInput.length) : rowInput.substring(rowInput.length - 1, rowInput.length);
        setRowInput(`${parseInt(lastRowNumber) + 1}`);
    }

    return (
        <div className={styles.create}>
            <Title label={'Create a Pattern'} />
            <form className={styles.form}>
                <div className={styles.row}>
                    <Form.Group className={styles.formGroup}>
                        <Form.Label className={styles.label}>Title: </Form.Label>
                        <Form.Control
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            className={styles.input}
                        />
                    </Form.Group>
                    <Form.Group className={styles.formGroup}>
                        <Form.Label className={styles.label}>Difficulty: </Form.Label>
                        <Form.Control
                            onChange={(e) => setDifficulty(e.target.value)}
                            value={difficulty}
                            className={styles.input}
                        />
                    </Form.Group>
                    <Form.Group className={styles.formGroup}>
                        <Form.Label className={styles.label}>Materials:</Form.Label>
                        <Form.Control type="textarea" as="textarea" className={styles.input} onChange={(e) => setMaterials(e.target.value)} />
                    </Form.Group>
                </div>
                <div className={styles.pattern}>
                    <Form.Group className={styles.formGroup}>
                        <Form.Label className={styles.label}>Pattern:</Form.Label>
                        <div className={styles.patternInputRow}>
                            <div>
                                <Form.Label>Row(s): </Form.Label>
                                <Form.Control
                                    onChange={(e) => setRowInput(e.target.value)}
                                    value={rowInput}
                                    className={styles.patternInput}
                                />
                            </div>
                            <div>
                                <Form.Label>Stitch: </Form.Label>
                                <Form.Control
                                    onChange={(e) => setPatternInput(e.target.value)}
                                    value={patternInput}
                                    className={styles.patternInput}
                                />
                            </div>
                            <Button variant={"secondary"} onClick={handleRowChange} label={"+"} disabled={rowInput === "" || patternInput === ""} size={"small"} />
                        </div>
                    </Form.Group>
                    <Title label="Preview" />
                    <Pattern title={title} materials={materials} pattern={pattern} difficulty={difficulty} isPreview={true} handleEdit={handleRowEdit} />
                </div>
            </form>
            <Button variant={'primary'} onClick={handleSubmit} label="Submit" />
        </div>
    )
}

export default Create

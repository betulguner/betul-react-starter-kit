import {Formik, Form, Field} from "formik";

export default function Contact(){
    return(
        <div>
            <h3>Contact2</h3>
            <Formik initialValues={{
                name: 'Betül',
                about: '',
                accept:false,
                gender:1,
                skills: ['html', 'css', 'mssql']
            }}
            onSubmit={values => console.log(values)}>

                {({values}) => (
                    <Form>
                        <Field name="name"/> <br/>
                        <Field component="textarea" rows={3} cols={19} name="about"/> <br/>
                        <label>                        
                            <Field type="checkbox" name="accept"/>
                            Kuralları kabul ediyorum!
                        </label><br/>
                        <Field component="select" name="gender">
                            <option value={1}>Kadın</option>
                            <option value={2}>Erkek</option>
                        </Field> <br/>
                        <Field component="select" name="skills" multiple={true}>
                            <option value="php">PHP</option>
                            <option value="css">CSS</option>
                            <option value="js">JS</option>
                            <option value="html">HTML</option>
                            <option value="mssql">MSSQL</option>

                        </Field>
                        <button disabled={!values.accept} type="submit">Send</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}




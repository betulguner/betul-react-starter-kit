import {Formik, Form, Field} from "formik";
import Input from "../components/form/input";
import File from "../components/form/File";
import Checkbox from "../components/form/Checkbox";
import Textarea from "../components/form/Textarea";
import Select from "../components/form/Select";
import Radio from "../components/form/Radio";

export default function Contact(){
    return(
        <div>
            <h3>Contact</h3>
            <Formik initialValues={{
                name: 'Betül',
                about: '',
                accept:false,
                gender:1,
                skills: ['html', 'css', 'mssql'],
                level: 'sr'
            }}
            onSubmit={values => console.log(values)}>

                {({values}) => (
                    <Form>
                        <Input label="ad-soyad" name="name"/> <br/>
                        <Textarea label="hakkında" rows={3} cols={19} name="about"/> <br/>
                        <Checkbox label="kuralları kabul ediyorum" name="accept"/> <br/>
                        
                        <Select label="cinsiyet" name="gender" options= {[
                            {key: 1, value: 'Kadın'},
                            {key: 2, value: 'Erkek'}

                        ]}/>  <br/>

                        <Field component="select" name="skills" multiple={true}>
                            <option value="php">PHP</option>
                            <option value="css">CSS</option>
                            <option value="js">JS</option>
                            <option value="html">HTML</option>
                            <option value="mssql">MSSQL</option>
                        </Field><br/>

                        <Radio label="seviyenizi seçin:" name="level" options={[
                            {key:"jr",value:"Jr.Developer"},
                            {key:"sr",value:"Sr.Developer"},
                            {key:"ninja",value:"Ninja"}

                        ]}/>

                        <button disabled={!values.accept} type="submit">Send</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}




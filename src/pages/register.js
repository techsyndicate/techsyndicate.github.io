import React, { Component } from 'react';
import db from '../firebase';
import Jumbotron from '../components/jumbotron';
import { TextInput, Checkbox, Button } from 'react-materialize';

class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            schoolname: '',
            clubname: '',
            clubemail: '',
            teachername: '',
            teachertel: '',
            studentname: '',
            studenttel: '',

            hack_p1: '',
            hack_p2: '',
            hack_p3: '',

            design_p1: '',
            design_p2: '',
            design_p3: '',

            gd_p1: '',

            surprise_p1: '',
            surprise_p2: '',

            cross_p1: '',
            cross_p2: '',

            audio_p1: '',

            srrobotics_p1: '',
            srrobotics_p2: '',

            jrrobotics_p1: '',
            jrrobotics_p2: '',

            jrquiz_p1: '',
            jrquiz_p2: '',

            spark_p1: '',

            paint3d_p1: '',

            checkHack: false,
            checkDesign: false,
            checkGd: false,
            checkSurprise: false,
            checkCross: false,
            checkSrRobotics: false,
            checkJrRobotics: false,
            checkJrQuiz: false,
            checkAdobeSpark: false,
            checkPaint3D: false
        }

        this.handleHack = this.handleHack.bind(this);
        this.handleGd = this.handleGd.bind(this);
        this.handleSurprise = this.handleSurprise.bind(this);
        this.handleCross = this.handleCross.bind(this);
        this.handleAudio = this.handleAudio.bind(this);
        this.handleSrRobotics = this.handleSrRobotics.bind(this);
        this.handleJrRobotics = this.handleJrRobotics.bind(this);
        this.handleJrQuiz = this.handleJrQuiz.bind(this);
        this.handleAdobeSpark = this.handleAdobeSpark.bind(this);
        this.handlePaint3D = this.handlePaint3D.bind(this);
    }

    handleHack() { this.setState({checkHack: !this.state.checkHack}) }
    handleDesign() { this.setState({checkDesign: !this.state.checkDesign}) }
    handleGd() { this.setState({checkGd: !this.state.checkGd}) }
    handleSurprise() { this.setState({checkSurprise: !this.state.checkSurprise}) }
    handleCross() { this.setState({checkCross: !this.state.checkCross}) }
    handleAudio() { this.setState({checkAudio: !this.state.checkAudio}) }
    handleSrRobotics() { this.setState({checkSrRobotics: !this.state.checkSrRobotics}) }
    handleJrRobotics(){ this.setState({checkSrRobotics: !this.state.checkSrRobotics}) }
    handleJrQuiz(){ this.setState({checkJrQuiz: !this.state.checkJrQuiz}) }
    handleAdobeSpark(){ this.setState({checkAdobeSpark: !this.state.checkAdobeSpark}) }
    handlePaint3D(){ this.setState({checkPaint3D: !this.state.checkPaint3D}) }

    updateInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    completeReg(e) {
        e.preventDefault();

        const registrations = db.collection('schools');
        registrations.doc(this.state.schoolname).set({
            school_name: this.state.schoolname,
            club_name: this.state.clubname,
            club_email: this.state.clubemail,
            teacher_incharge: this.state.teachername,
            teacher_tel: this.state.teachertel,
            student_incharge: this.state.studentname,
            student_tel: this.state.studenttel,
            hack_p1: this.state.hack_p1,
            hack_p2: this.state.hack_p2,
            hack_p3: this.state.hack_p3,
            design_p1: this.state.design_p1,
            design_p2: this.state.design_p2,
            design_p3: this.state.design_p3,
            gd_p1: this.state.gd_p1,
            surprise_p1: this.state.surprise_p1,
            surprise_p2: this.state.surprise_p2,
            cross_p1: this.state.cross_p1,
            cross_p2: this.state.cross_p2,
            audio_p1: this.state.audio_p1,
            srrobotics_p1: this.state.srrobotics_p1,
            srrobotics_p2: this.state.srrobotics_p2,
            jrrobotics_p1: this.state.jrrobotics_p1,
            jrrobotics_p2: this.state.jrrobotics_p2,
            jrquiz_p1: this.state.jrquiz_p1,
            jrquiz_p2: this.state.jrquiz_p2,
            spark_p1: this.state.spark_p1,
            paint3d_p1: this.state.paint3d_p1
        });

        this.setState({
            schoolname: '',
            clubname: '',
            clubemail: '',
            teachername: '',
            teachertel: '',
            studentname: '',
            studenttel: '',
            hack_p1: '',
            hack_p2: '',
            hack_p3: '',
            design_p1: '',
            design_p2: '',
            design_p3: '',
            gd_p1: '',
            surprise_p1: '',
            surprise_p2: '',
            cross_p1: '',
            cross_p2: '',
            audio_p1: '',
            srrobotics_p1: '',
            srrobotics_p2: '',
            jrrobotics_p1: '',
            jrrobotics_p2: '',
            jrquiz_p1: '',
            jrquiz_p2: '',
            spark_p1: '',
            paint3d_p1: ''
        });
    }

    render() {
        const crossForm = 
            <div className="hack-form">
                <p>Crossword</p>
                <TextInput id="TextInput-4" label="Participant 1" name="cross_p1" value={this.state.cross_p1} onChange={this.updateInput} m={8}/>
                <TextInput id="TextInput-4" label="Participant 2" name="cross_p2" value={this.state.cross_p2} onChange={this.updateInput} m={8}/>
            </div>
        const audioForm = 
            <div className="hack-form">
                <p>Audio Mixing</p>
                <TextInput id="TextInput-4" label="Participant 1" name="audio_p1" value={this.state.audio_p1} onChange={this.updateInput} m={8}/>
            </div>
        const srRoboticsForm =
            <div className="hack-form">
                <p>Sr Robotics</p>
                <TextInput id="TextInput-4" label="Participant 1" name="srrobotics_p1" value={this.state.srrobotics_p1} onChange={this.updateInput} m={8}/>
                <TextInput id="TextInput-4" label="Participant 2" name="srrobotics_p2" value={this.state.srrobotics_p2} onChange={this.updateInput} m={8}/>
            </div>
        const jrRoboticsForm =
            <div className="hack-form">
                <p>Jr Robotics</p>
                <TextInput id="TextInput-4" label="Participant 1" name="jrrobotics_p1" value={this.state.jrrobotics_p1} onChange={this.updateInput} m={8}/>
                <TextInput id="TextInput-4" label="Participant 2" name="jrrobotics_p2" value={this.state.jrrobotics_p2} onChange={this.updateInput} m={8}/>
            </div>
        const jrQuiz =
            <div className="hack-form">
                <p>Jr Quiz</p>
                <TextInput id="TextInput-4" label="Participant 1" name="jrquiz_p1" value={this.state.jrquiz_p1} onChange={this.updateInput} m={8}/>
                <TextInput id="TextInput-4" label="Participant 2" name="jrquiz_p2" value={this.state.jrquiz_p2} onChange={this.updateInput} m={8}/>
            </div>
        const adobeSpark = 
            <div className="hack-form">
                <p>Adobe Spark</p>
                <TextInput id="TextInput-4" label="Participant 1" name="spark_p1" value={this.state.spark_p1} onChange={this.updateInput} m={8}/>
            </div>
        const paint3D = 
            <div className="hack-form">
                <p>Paint 3D</p>
                <TextInput id="TextInput-4" label="Participant 1" name="paint3d_p1" value={this.state.paint3d_p1} onChange={this.updateInput} m={8}/>
            </div>
        return (
            <>
            <Jumbotron
              title="Register"
              desc="Register for Robotronics '20 here"
            />
            <form onSubmit={this.completeReg}>
                <TextInput id="TextInput-4" label="School name" name="schoolname" value={this.state.schoolname} onChange={this.updateInput} m={8}/>
                <TextInput id="TextInput-4" label="Club name" name="clubname" value={this.state.clubname} onChange={this.updateInput} m={8}/>
                <TextInput id="TextInput-4" label="Club email" name="clubemail" type="email" value={this.state.clubemail} onChange={this.updateInput} m={8}/>
                <TextInput id="TextInput-4" label="Teacher incharge" name="teachername" value={this.state.teachername} onChange={this.updateInput} m={8}/>
                <TextInput id="TextInput-4" label="Teacher incharge phone" type="tel" name="teachertel" value={this.state.teachertel} onChange={this.updateInput} m={8}/>
                <TextInput id="TextInput-4" label="Student incharge" name="studentname" value={this.state.studentname} onChange={this.updateInput} m={8}/>
                <TextInput id="TextInput-4" label="Student incharge phone" type="tel" name="studenttel" value={this.state.studenttel} onChange={this.updateInput} m={8}/>

                <p>Events</p>
                <Checkbox id="checkbox_3" label="Hackathon" checked={this.state.checkHack} onChange={this.handleHack}/><br/>
                <Checkbox id="checkbox_3" label="Designathon" checked={this.state.checkDesign} onChange={this.handleDesign}/><br/>
                <Checkbox id="checkbox_3" label="Group Discussion" checked={this.state.checkGd} onChange={this.handleGd}/><br/>
                <Checkbox id="checkbox_3" label="Crossword" checked={this.state.checkCross} onChange={this.handleCross}/><br/>
                <Checkbox id="checkbox_3" label="Audio Mixing" checked={this.state.checkAudio} onChange={this.handleAudio}/><br/>
                <Checkbox id="checkbox_3" label="Sr Robotics" checked={this.state.checkSrRobotics} onChange={this.handleSrRobotics}/><br/>
                <Checkbox id="checkbox_3" label="Jr Robotics" checked={this.state.checkJrRobotics} onChange={this.handleJrRobotics}/><br/>
                <Checkbox id="checkbox_3" label="Jr Quiz" checked={this.state.checkJrQuiz} onChange={this.handleJrQuiz}/><br/>
                <Checkbox id="checkbox_3" label="Adobe Spark" checked={this.state.checkAdobeSpark} onChange={this.handleAdobeSpark}/><br/>
                <Checkbox id="checkbox_3" label="Paint 3D" checked={this.state.checkPaint3D} onChange={this.handlePaint3D}/><br/>

                <div className="hack-form">
                    <p>Hackathon</p>
                    <TextInput id="TextInput-4" label="Participant 1" name="hack_p1" value={this.state.hack_p1} onChange={this.updateInput} m={8}/>
                    <TextInput id="TextInput-4" label="Participant 2" name="hack_p2" value={this.state.hack_p2} onChange={this.updateInput} m={8}/>
                    <TextInput id="TextInput-4" label="Participant 3" name="hack_p3" type="email" value={this.state.hack_p3} onChange={this.updateInput} m={8}/>
                </div>
                <div className="hack-form">
                    <p>Designathon</p>
                    <TextInput id="TextInput-4" label="Participant 1" name="design_p1" value={this.state.design_p1} onChange={this.updateInput} m={8}/>
                    <TextInput id="TextInput-4" label="Participant 2" name="design_p2" value={this.state.design_p2} onChange={this.updateInput} m={8}/>
                    <TextInput id="TextInput-4" label="Participant 3" name="design_p3" type="email" value={this.state.design_p3} onChange={this.updateInput} m={8}/>
                </div>
                <div className="hack-form">
                    <p>Group Discussion</p>
                    <TextInput id="TextInput-4" label="Participant 1" name="gd_p1" value={this.state.gd_p1} onChange={this.updateInput} m={8}/>
                </div>
                <div className="hack-form">
                    <p>Surprise</p>
                    <TextInput id="TextInput-4" label="Participant 1" name="surprise_p1" value={this.state.surprise_p1} onChange={this.updateInput} m={8}/>
                    <TextInput id="TextInput-4" label="Participant 2" name="surprise_p2" value={this.state.surprise_p2} onChange={this.updateInput} m={8}/>
                </div>

                <Button node="button" type="submit">Submit</Button>
            </form><br/>
            </>
        )
    }
}

export default RegisterPage;
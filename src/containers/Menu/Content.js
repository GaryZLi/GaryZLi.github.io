import React from 'react';
import { connect } from 'react-redux';
import {makeStyles} from '@material-ui/styles';
import Projects from './Projects';
import ProjectsList from './ProjectsList';
import ListWrapper from '../../components/ListWrapper';
import MainCppIcon from '../../components/MainCppIcon';
import CmdPromptIcon from '../../components/CmdPromptIcon';
import IE from '../../picSrc/IE.png';
import resume from '../../picSrc/resume.png';
import help from '../../picSrc/help.png';
import linkedin from '../../picSrc/linkedin.png';
import github from '../../picSrc/github.png';
import facebook from '../../picSrc/facebook.png';
import instagram from '../../picSrc/instagram.png';
import gmail from '../../picSrc/gmail.png';
import {
    updateVisibility,
    updateWindow,
    updateView,
    addTaskbarWindow,
} from '../../actions';

const useStyles = makeStyles({
    content: {
        height: 402,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 40,
    },
    programs: {
        height: '100%',
        width: '49%',
        backgroundColor: 'white',
        position: 'relative',
    },
    social: {
        height: '100%',
        width: '49%',
        backgroundColor: '#b6d6f5',
        position: 'relative',
    },
    programStyles: {
        height: 50,
        fontSize: 15,
        '&:hover': {
            backgroundColor: '#379bf8',
            cursor: 'pointer',
        }
    },
    socialStyles: {
        height: 60,
        fontSize: 16,
        '&:hover': {
            backgroundColor: '#528EFD',
            cursor: 'pointer',
        }
    },
});

const Content = ({
    projectsList,
    updateWindow,
    updateVisibility,
    updateView,
    addTaskbarWindow,
}) => {
    const classes = useStyles();

    const handleWindow = window => {
        updateWindow(window, true);
        updateVisibility(window, true);
        updateView(window);
        addTaskbarWindow(window);
    };

    return (
        <div className={classes.content}>
            <div className={classes.programs}>
                <ListWrapper className={classes.programStyles} icon={IE} text='Internet Explorer' handleClick={() => handleWindow('Internet Explorer')}/>
                <ListWrapper className={classes.programStyles} icon={<MainCppIcon height={40} width={40}/>} text='main.cpp' handleClick={() => handleWindow('main.cpp')}/>
                <ListWrapper className={classes.programStyles} icon={<CmdPromptIcon height={40} width={40}/>} text='Command Prompt' handleClick={() => handleWindow('Command Prompt')}/>
                <ListWrapper className={classes.programStyles} icon={resume} text='Resume' handleClick={() => console.log('clicked resunme')}/>
                <ListWrapper className={classes.programStyles} icon={help} text='Help' handleClick={() => console.log('clicked help')}/>
                <Projects/>
            </div>
            <div className={classes.social}>
                <ListWrapper className={classes.socialStyles} icon={linkedin} text='Linkedin' link='https://www.linkedin.com/in/garyzecun/' style={{backgroundColor: 'white'}}/>
                <ListWrapper className={classes.socialStyles} icon={github} text='Github' link='https://github.com/GaryZLi' style={{backgroundColor: 'white', borderRadius: '50%'}}/>
                <ListWrapper className={classes.socialStyles} icon={facebook} text='Facebook' link='https://www.facebook.com/gary.zecun/'/>
                <ListWrapper className={classes.socialStyles} icon={instagram} text='Instagram' link='https://www.instagram.com/gxryli/' style={{backgroundColor: 'white', borderRadius: 13}}/>
                <ListWrapper className={classes.socialStyles} icon={gmail} text='Email' link='mailto:gary.zecun@gmail.com'/>
                {projectsList && <ProjectsList/>}
            </div>
        </div>
    );
};

const mapStatetoProps = ({projectsList}) => ({projectsList});

const mapDispatchToProps = {
    updateVisibility,
    updateWindow,
    updateView,
    addTaskbarWindow,
};

export default connect(mapStatetoProps, mapDispatchToProps)(Content);
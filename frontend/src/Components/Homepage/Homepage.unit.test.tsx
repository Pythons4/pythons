import React from "react";
import { shallow } from 'enzyme';
import Homepage from "./Homepage"
import Footer from "./Footer"
import { findByTestAtrr } from "../../../Utils"

const setup = (props = {}) => {
    var footer = shallow(<Footer />);
    var homepage = shallow(<Homepage />)
    return {
        footer,
        homepage
    }
}

describe('HomepageCopmonents', () => {

    let components: any;
    beforeEach(() => {
        components = setup();
    })


    it('homepage should render without errors', () => {
        // var containerimg = components.homepage.find(".container-img")
        var containerimg = findByTestAtrr(components.homepage, 'container-img')
        expect(containerimg.length).toBe(1);
    });

    it('footer should render without errors', () => {
        var footer: any = findByTestAtrr(components.footer, 'footer')
        // var footer = components.footer.find(".footer");
        expect(footer.length).toBe(1);
    });
});
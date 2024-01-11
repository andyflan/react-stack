import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="text-lg my-6 font-bold">Dashboard</h2>

      <div className="prose">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a metus lectus. Sed commodo 
        blandit ullamcorper. Sed efficitur molestie convallis. Nullam at ipsum sodales, ullamcorper 
        risus id, facilisis nisl. Donec iaculis est velit, nec dignissim felis efficitur eget. Donec 
        eu orci ornare, tincidunt velit sed, tristique lorem. Maecenas elementum sollicitudin lacus 
        vitae rutrum. Vivamus maximus sed neque sit amet dictum. Fusce cursus leo a libero sagittis 
        ultricies. Vivamus egestas lobortis tellus sit amet sagittis. Mauris euismod tristique 
        vestibulum. Pellentesque lacinia tortor facilisis nulla tempor ultricies. Praesent luctus 
        nulla a lorem pharetra, ac hendrerit sem convallis.</p>

        <p>Curabitur viverra, elit eget congue mattis, felis justo consectetur velit, ac suscipit 
        magna mauris id neque. Duis nisl risus, bibendum nec ultricies nec, pellentesque vitae lorem. 
        Nulla ex ante, consequat commodo elementum et, sodales nec mi. Duis nec sollicitudin ligula. 
        Vestibulum mollis vulputate ante, vel cursus lorem feugiat nec. Aliquam quis ante vel ligula 
        cursus mattis. Ut dictum placerat lacinia. Ut facilisis tellus sagittis, iaculis ipsum at, 
        luctus nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec congue 
        tortor risus, et volutpat tortor condimentum ac. Fusce eu mi id lorem fringilla molestie. 
        Fusce ac sagittis justo, at mollis sapien.</p>

        <p>Vivamus elementum commodo lectus, in interdum risus luctus a. Ut libero metus, tincidunt 
        nec ligula in, luctus malesuada nunc. Sed egestas, risus at commodo elementum, nibh nibh 
        semper diam, nec venenatis tellus augue et velit. Nulla lacus leo, posuere malesuada dolor 
        volutpat, auctor maximus mi. Proin egestas felis ac eleifend faucibus. Duis eu neque non 
        justo euismod efficitur. Maecenas pulvinar velit eu augue viverra, vel auctor velit feugiat. 
        Cras egestas felis ex, in auctor tortor interdum ut. Sed sagittis mollis arcu. Orci varius 
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ac convallis 
        ex. Mauris ultrices risus mauris, ut viverra quam varius viverra. In luctus erat ut erat 
        finibus pellentesque. Praesent arcu lorem, dapibus vel libero porttitor, fermentum fringilla 
        mauris. Pellentesque ullamcorper turpis diam, eu mollis lorem dictum eget.</p>
      </div>

      <Button
        appearance="primary"
        onClick={() => navigate("/login")}
      >Go to login</Button>
    </>
  );
};
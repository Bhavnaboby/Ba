import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
public class calculator implements ActionListener
{
  static JFrame f;
  static JButton b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
  static JTextField t;
  static String msg2=" ",msg1=" ",op;
  public static void main(String args[])
  {
    calculator c =new calculator();
    f=new JFrame("calculator");
    t=new JTextField("");
    b0=new JButton("0");
    b1=new JButton("1");
    b2=new JButton("2");
    b3=new JButton("3");
    b4=new JButton("4");
    b5=new JButton("5");
    b6=new JButton("6");
    b7=new JButton("7");
    b8=new JButton("8");
    b9=new JButton("9");
    b10=new JButton("+");
    b11=new JButton("-");
    b12=new JButton("*");
    b13=new JButton("/");
    b14=new JButton(".");
    b15=new JButton("=");
    b16=new JButton("cc");
    t.setBounds(10,20,248,50);
    b0.setBounds(10,270,50,50);
    b1.setBounds(130,210,50,50);
    b2.setBounds(70,210,50,50);
    b3.setBounds(10,210,50,50);
    b4.setBounds(130,150,50,50);
    b5.setBounds(70,150,50,50);
    b6.setBounds(10,150,50,50);
    b7.setBounds(130,90,50,50);
    b8.setBounds(70,90,50,50);
    b9.setBounds(10,90,50,50);
    b10.setBounds(190,90,50,50);
    b11.setBounds(190,150,50,50);
    b12.setBounds(190,210,50,50);
    b13.setBounds(190,270,50,50);
    b14.setBounds(10,330,50,50);
    b15.setBounds(130,270,50,50);
    b16.setBounds(70,270,50,50);
    f.add(t);
    f.add(b0);
    f.add(b1);
    f.add(b2);
    f.add(b3);
    f.add(b4);
    f.add(b5);
    f.add(b6);
    f.add(b7);
    f.add(b8);
    f.add(b9);
    f.add(b10);
    f.add(b11);
    f.add(b12);
    f.add(b13);
    f.add(b14);
    f.add(b15);
    f.add(b16);
    f.setSize(350,450);
    f.setLayout(null);
    f.setVisible(true);
    b0.addActionListener(c);
    b1.addActionListener(c);
    b2.addActionListener(c);
    b3.addActionListener(c);
    b4.addActionListener(c);
    b5.addActionListener(c);
    b6.addActionListener(c);
    b7.addActionListener(c);
    b8.addActionListener(c);
    b9.addActionListener(c);
    b10.addActionListener(c);
    b11.addActionListener(c);
    b12.addActionListener(c);
    b13.addActionListener(c);
    b14.addActionListener(c);
    b15.addActionListener(c);
    b16.addActionListener(c);
 }
    double findop(String op,double m1,double m2)
    {
      char c=op.charAt(0);
      switch(c)
      {
       case'+': return m1+m2;
       case'-': return m1-m2;
       case'*': return m1*m2;
       case'/': return m1/m2;
     }
     return 0;
   }
      
    public void actionPerformed(ActionEvent e)
    {
       if(e.getSource()==b0)
       {
         msg2=msg2+"0";
         t.setText(msg2);
       }
       else if(e.getSource()==b1)
       {
         msg2=msg2+"1";
         t.setText(msg2);
       }
      
       else if(e.getSource()==b2)
       {
         msg2=msg2+"2";
         t.setText(msg2);
       }
       else if(e.getSource()==b3)
       {
         msg2=msg2+"3";
         t.setText(msg2);
       }
       else if(e.getSource()==b4)
       {
         msg2=msg2+"4";
         t.setText(msg2);
       }
       else if(e.getSource()==b5)
       {
         msg2=msg2+"5";
         t.setText(msg2);
       }
       else if(e.getSource()==b6)
       {
         msg2=msg2+"6";
         t.setText(msg2);
       }
       else if(e.getSource()==b7)
       {
         msg2=msg2+"7";
         t.setText(msg2);
       }
       else if(e.getSource()==b8)
       {
         msg2=msg2+"8";
         t.setText(msg2);
       }
       else if(e.getSource()==b9)
       {
         msg2=msg2+"9";
         t.setText(msg2);
       }
       else if(e.getSource()==b14)
       {
         msg2=msg2+".";
         t.setText(msg2);
       }
       else if(e.getSource()==b15)
       {
         double m1=Double.parseDouble(msg1);
         double m2=Double.parseDouble(msg2);
         msg2=Double.toString(findop(op,m1,m2));
         t.setText(msg2);
         msg2=" ";msg1=" ";op=" ";
       }
     else if(e.getSource()==b16)
     {
       msg2=" ";msg1=" ";op="C";
       t.setText(msg2);
     }
     else if(e.getSource()==b10)
     {
       msg1=msg2;
       msg2=" ";op="+";
       t.setText(msg2);
     }
     else if(e.getSource()==b11)
     {
       msg1=msg2;
       msg2=" ";op="-";
       t.setText(msg2);
     }
     else if(e.getSource()==b12)
     {
       msg1=msg2;
       msg2=" ";op="*";
       t.setText(msg2);
     }
     else if(e.getSource()==b13)
     {
       msg1=msg2;
       msg2=" ";op="/";
       t.setText(msg2);
     }
  }
}
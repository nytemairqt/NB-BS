reg rr = 0;
reg m = 0;
reg v = 0;function onNoteOn()
{
	m = Message.getNoteNumber();
	v = Message.getVelocity();
		
	if (m < 12)
		Message.ignoreEvent(1);
	
	if (m > 64)
		Message.ignoreEvent(1);		
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 
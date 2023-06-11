<?xml version="1.0" encoding="UTF-8"?>
<?PowerDesigner AppLocale="UTF16" ID="{C06BC9C7-AE2A-44A6-A190-5C65FD6B5ADA}" Label="" LastModificationDate="1587669346" Name="diagramme de classes" Objects="243" Symbols="111" Target="Java" TargetLink="Reference" Type="{18112060-1A4B-11D1-83D9-444553540000}" signature="CLD_OBJECT_MODEL" version="15.1.0.2850"?>
<!-- Veuillez ne pas modifier ce fichier -->

<Model xmlns:a="attribute" xmlns:c="collection" xmlns:o="object">

<o:RootObject Id="o1">
<c:Children>
<o:Model Id="o2">
<a:ObjectID>C06BC9C7-AE2A-44A6-A190-5C65FD6B5ADA</a:ObjectID>
<a:Name>diagramme de classes</a:Name>
<a:Code>diagramme_de_classes</a:Code>
<a:CreationDate>1587040849</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587569568</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:PackageOptionsText>[FolderOptions]

[FolderOptions\Class Diagram Objects]
GenerationCheckModel=Yes
GenerationPath=
GenerationOptions=
GenerationTasks=
GenerationTargets=
GenerationSelections=</a:PackageOptionsText>
<a:ModelOptionsText>[ModelOptions]

[ModelOptions\Cld]
CaseSensitive=Yes
DisplayName=Yes
EnableTrans=Yes
EnableRequirements=No
ShowClss=No
DeftAttr=int
DeftMthd=int
DeftParm=int
DeftCont=java.util.Collection
DomnDttp=Yes
DomnChck=No
DomnRule=No
SupportDelay=No
PreviewEditable=Yes
AutoRealize=No
DttpFullName=Yes
DeftClssAttrVisi=private
VBNetPreprocessingSymbols=
CSharpPreprocessingSymbols=

[ModelOptions\Cld\NamingOptionsTemplates]

[ModelOptions\Cld\ClssNamingOptions]

[ModelOptions\Cld\ClssNamingOptions\CLDPCKG]

[ModelOptions\Cld\ClssNamingOptions\CLDPCKG\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,,,firstLowerWord)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CLDPCKG\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CLDDOMN]

[ModelOptions\Cld\ClssNamingOptions\CLDDOMN\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CLDDOMN\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CLDCLASS]

[ModelOptions\Cld\ClssNamingOptions\CLDCLASS\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,,,FirstUpperChar)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CLDCLASS\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CLDINTF]

[ModelOptions\Cld\ClssNamingOptions\CLDINTF\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,,,FirstUpperChar)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CLDINTF\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\UCDACTR]

[ModelOptions\Cld\ClssNamingOptions\UCDACTR\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\UCDACTR\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\UCDUCAS]

[ModelOptions\Cld\ClssNamingOptions\UCDUCAS\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\UCDUCAS\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\SQDOBJT]

[ModelOptions\Cld\ClssNamingOptions\SQDOBJT\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\SQDOBJT\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\SQDMSSG]

[ModelOptions\Cld\ClssNamingOptions\SQDMSSG\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\SQDMSSG\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CPDCOMP]

[ModelOptions\Cld\ClssNamingOptions\CPDCOMP\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,,,FirstUpperChar)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CPDCOMP\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CLDATTR]

[ModelOptions\Cld\ClssNamingOptions\CLDATTR\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,,,firstLowerWord)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CLDATTR\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CLDMETHOD]

[ModelOptions\Cld\ClssNamingOptions\CLDMETHOD\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,,,firstLowerWord)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CLDMETHOD\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CLDPARM]

[ModelOptions\Cld\ClssNamingOptions\CLDPARM\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,,,firstLowerWord)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CLDPARM\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\OOMPORT]

[ModelOptions\Cld\ClssNamingOptions\OOMPORT\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\OOMPORT\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\OOMPART]

[ModelOptions\Cld\ClssNamingOptions\OOMPART\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\OOMPART\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CLDASSC]

[ModelOptions\Cld\ClssNamingOptions\CLDASSC\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,,,firstLowerWord)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\CLDASSC\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\UCDASSC]

[ModelOptions\Cld\ClssNamingOptions\UCDASSC\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\UCDASSC\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\GNRLLINK]

[ModelOptions\Cld\ClssNamingOptions\GNRLLINK\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\GNRLLINK\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\RQLINK]

[ModelOptions\Cld\ClssNamingOptions\RQLINK\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\RQLINK\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\RLZSLINK]

[ModelOptions\Cld\ClssNamingOptions\RLZSLINK\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\RLZSLINK\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\DEPDLINK]

[ModelOptions\Cld\ClssNamingOptions\DEPDLINK\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\DEPDLINK\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\OOMACTV]

[ModelOptions\Cld\ClssNamingOptions\OOMACTV\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\OOMACTV\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\ACDOBST]

[ModelOptions\Cld\ClssNamingOptions\ACDOBST\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\ACDOBST\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\STAT]

[ModelOptions\Cld\ClssNamingOptions\STAT\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\STAT\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\DPDNODE]

[ModelOptions\Cld\ClssNamingOptions\DPDNODE\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\DPDNODE\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\DPDCMPI]

[ModelOptions\Cld\ClssNamingOptions\DPDCMPI\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\DPDCMPI\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\DPDASSC]

[ModelOptions\Cld\ClssNamingOptions\DPDASSC\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\DPDASSC\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\OOMVAR]

[ModelOptions\Cld\ClssNamingOptions\OOMVAR\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\OOMVAR\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\FILO]

[ModelOptions\Cld\ClssNamingOptions\FILO\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=&quot;\/:*?&lt;&gt;|&quot;
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\FILO\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_. &quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\FRMEOBJ]

[ModelOptions\Cld\ClssNamingOptions\FRMEOBJ\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\FRMEOBJ\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\FRMELNK]

[ModelOptions\Cld\ClssNamingOptions\FRMELNK\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\FRMELNK\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\DefaultClass]

[ModelOptions\Cld\ClssNamingOptions\DefaultClass\Name]
Template=
MaxLen=254
Case=M
ValidChar=
InvldChar=
AllValid=Yes
NoAccent=No
DefaultChar=_
Script=.convert_name(%Name%,&quot;_&quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Cld\ClssNamingOptions\DefaultClass\Code]
Template=
MaxLen=254
Case=M
ValidChar=&#39;a&#39;-&#39;z&#39;,&#39;A&#39;-&#39;Z&#39;,&#39;0&#39;-&#39;9&#39;,&quot;_&quot;
InvldChar=&quot; &#39;(.)+=*/&quot;
AllValid=Yes
NoAccent=Yes
DefaultChar=_
Script=.convert_code(%Code%,&quot; &quot;)
ConvTable=
ConvTablePath=%_HOME%\Fichiers de ressources\Tables de conversion

[ModelOptions\Generate]

[ModelOptions\Generate\Cdm]
CheckModel=Yes
SaveLinks=Yes
NameToCode=No
Notation=2

[ModelOptions\Generate\Pdm]
CheckModel=Yes
SaveLinks=Yes
ORMapping=No
NameToCode=No
BuildTrgr=No
TablePrefix=
RefrUpdRule=RESTRICT
RefrDelRule=RESTRICT
IndxPKName=%TABLE%_PK
IndxAKName=%TABLE%_AK
IndxFKName=%REFR%_FK
IndxThreshold=
ColnFKName=%.3:PARENT%_%COLUMN%
ColnFKNameUse=No

[ModelOptions\Generate\Xsm]
CheckModel=Yes
SaveLinks=Yes
ORMapping=No
NameToCode=No</a:ModelOptionsText>
<c:ObjectLanguage>
<o:Shortcut Id="o3">
<a:ObjectID>AC7860CB-17E2-4041-A571-F2F158DB6838</a:ObjectID>
<a:Name>Java</a:Name>
<a:Code>Java</a:Code>
<a:CreationDate>1587040849</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040849</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TargetStereotype/>
<a:TargetID>0DEDDB90-46E2-45A0-886E-411709DA0DC9</a:TargetID>
<a:TargetClassID>1811206C-1A4B-11D1-83D9-444553540000</a:TargetClassID>
</o:Shortcut>
</c:ObjectLanguage>
<c:ExtendedModelDefinitions>
<o:Shortcut Id="o4">
<a:ObjectID>6EC41B27-8A1F-4B24-81CE-66EE1CF1AEBD</a:ObjectID>
<a:Name>WSDL for Java</a:Name>
<a:Code>WSDLJava</a:Code>
<a:CreationDate>1587040850</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040850</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TargetStereotype/>
<a:TargetID>C8F5F7B2-CF9D-4E98-8301-959BB6E86C8A</a:TargetID>
<a:TargetClassID>186C8AC3-D3DC-11D3-881C-00508B03C75C</a:TargetClassID>
</o:Shortcut>
</c:ExtendedModelDefinitions>
<c:ClassDiagrams>
<o:ClassDiagram Id="o5">
<a:ObjectID>2A00408D-C5E0-4902-A855-321C0027BA12</a:ObjectID>
<a:Name>DiagrammeClasses_1</a:Name>
<a:Code>DiagrammeClasses_1</a:Code>
<a:CreationDate>1587040849</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587569214</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DisplayPreferences>[DisplayPreferences]

[DisplayPreferences\CLD]

[DisplayPreferences\General]
Adjust to text=Yes
Snap Grid=No
Constrain Labels=Yes
Display Grid=No
Show Page Delimiter=Yes
Grid size=0
Graphic unit=2
Window color=255, 255, 255
Background image=
Background mode=8
Watermark image=
Watermark mode=8
Show watermark on screen=No
Gradient mode=0
Gradient end color=255, 255, 255
Show Swimlane=No
SwimlaneVert=Yes
TreeVert=No
CompDark=0

[DisplayPreferences\Object]
Mode=0
Trunc Length=80
Word Length=80
Word Text=!&quot;&quot;#$%&amp;&#39;()*+,-./:;&lt;=&gt;?@[\]^_`{|}~
Shortcut IntIcon=Yes
Shortcut IntLoct=Yes
Shortcut IntFullPath=No
Shortcut IntLastPackage=Yes
Shortcut ExtIcon=Yes
Shortcut ExtLoct=No
Shortcut ExtFullPath=No
Shortcut ExtLastPackage=Yes
Shortcut ExtIncludeModl=Yes
EObjShowStrn=Yes
ExtendedObject.Comment=No
ExtendedObject.IconPicture=No
ExtendedObject_SymbolLayout=
ELnkShowStrn=Yes
ELnkShowName=Yes
ExtendedLink_SymbolLayout=
FileObject.Stereotype=No
FileObject.DisplayName=Yes
FileObject.LocationOrName=No
FileObject.IconPicture=No
FileObject.IconMode=Yes
FileObject_SymbolLayout=
PckgShowStrn=Yes
Package.Comment=No
Package.IconPicture=No
Package_SymbolLayout=
Display Model Version=Yes
Class.IconPicture=No
Class_SymbolLayout=
Interface.IconPicture=No
Interface_SymbolLayout=
Port.IconPicture=No
Port_SymbolLayout=
ClssShowSttr=Yes
Class.Comment=No
ClssShowCntr=Yes
ClssShowAttr=Yes
ClssAttrTrun=No
ClssAttrMax=3
ClssShowMthd=Yes
ClssMthdTrun=No
ClssMthdMax=3
ClssShowInnr=Yes
IntfShowSttr=Yes
Interface.Comment=No
IntfShowAttr=Yes
IntfAttrTrun=No
IntfAttrMax=3
IntfShowMthd=Yes
IntfMthdTrun=No
IntfMthdMax=3
IntfShowCntr=Yes
IntfShowInnr=Yes
PortShowName=Yes
PortShowType=No
PortShowMult=No
AttrShowVisi=Yes
AttrVisiFmt=1
AttrShowStrn=Yes
AttrShowDttp=Yes
AttrShowDomn=No
AttrShowInit=Yes
MthdShowVisi=Yes
MthdVisiFmt=1
MthdShowStrn=Yes
MthdShowRttp=Yes
MthdShowParm=Yes
AsscShowName=No
AsscShowCntr=Yes
AsscShowRole=Yes
AsscShowOrdr=Yes
AsscShowMult=Yes
AsscMultStr=Yes
AsscShowStrn=No
GnrlShowName=No
GnrlShowStrn=Yes
GnrlShowCntr=Yes
RlzsShowName=No
RlzsShowStrn=Yes
RlzsShowCntr=Yes
DepdShowName=No
DepdShowStrn=Yes
DepdShowCntr=Yes
RqlkShowName=No
RqlkShowStrn=Yes
RqlkShowCntr=Yes

[DisplayPreferences\Symbol]

[DisplayPreferences\Symbol\FRMEOBJ]
STRNFont=Arial,8,N
STRNFont color=0, 0, 0
DISPNAMEFont=Arial,8,N
DISPNAMEFont color=0, 0, 0
LABLFont=Arial,8,N
LABLFont color=0, 0, 0
AutoAdjustToText=Yes
Keep aspect=No
Keep center=No
Keep size=No
Width=6000
Height=2000
Brush color=255 255 255
Fill Color=Yes
Brush style=6
Brush bitmap mode=12
Brush gradient mode=64
Brush gradient color=192 192 192
Brush background image=
Custom shape=
Custom text mode=0
Pen=1 0 255 128 128
Shadow color=192 192 192
Shadow=0

[DisplayPreferences\Symbol\FRMELNK]
CENTERFont=Arial,8,N
CENTERFont color=0, 0, 0
Line style=2
AutoAdjustToText=Yes
Keep aspect=No
Keep center=No
Keep size=No
Brush color=255 255 255
Fill Color=Yes
Brush style=1
Brush bitmap mode=12
Brush gradient mode=0
Brush gradient color=118 118 118
Brush background image=
Custom shape=
Custom text mode=0
Pen=1 0 128 128 255
Shadow color=192 192 192
Shadow=0

[DisplayPreferences\Symbol\FILO]
OBJSTRNFont=Arial,8,N
OBJSTRNFont color=0, 0, 0
DISPNAMEFont=Arial,8,N
DISPNAMEFont color=0, 0, 0
LCNMFont=Arial,8,N
LCNMFont color=0, 0, 0
AutoAdjustToText=Yes
Keep aspect=Yes
Keep center=Yes
Keep size=No
Width=2400
Height=2400
Brush color=255 255 255
Fill Color=No
Brush style=1
Brush bitmap mode=12
Brush gradient mode=0
Brush gradient color=118 118 118
Brush background image=
Custom shape=
Custom text mode=0
Pen=1 0 0 0 255
Shadow color=192 192 192
Shadow=-1

[DisplayPreferences\Symbol\CLDPCKG]
STRNFont=Arial,8,N
STRNFont color=0 0 0
DISPNAMEFont=Arial,8,N
DISPNAMEFont color=0 0 0
LABLFont=Arial,8,N
LABLFont color=0 0 0
AutoAdjustToText=Yes
Keep aspect=No
Keep center=No
Keep size=No
Width=4800
Height=3600
Brush color=255 255 192
Fill Color=Yes
Brush style=6
Brush bitmap mode=12
Brush gradient mode=65
Brush gradient color=255 255 255
Brush background image=
Custom shape=
Custom text mode=0
Pen=1 0 178 178 178
Shadow color=192 192 192
Shadow=0

[DisplayPreferences\Symbol\CLDCLASS]
STRNFont=Arial,8,N
STRNFont color=0 0 0
DISPNAMEFont=Arial,8,N
DISPNAMEFont color=0 0 0
CNTRFont=Arial,8,N
CNTRFont color=0 0 0
AttributesFont=Arial,8,N
AttributesFont color=0 0 0
ClassPrimaryAttributeFont=Arial,8,U
ClassPrimaryAttributeFont color=0 0 0
OperationsFont=Arial,8,N
OperationsFont color=0 0 0
InnerClassifiersFont=Arial,8,N
InnerClassifiersFont color=0 0 0
LABLFont=Arial,8,N
LABLFont color=0 0 0
AutoAdjustToText=Yes
Keep aspect=No
Keep center=No
Keep size=No
Width=4800
Height=3600
Brush color=233 202 131
Fill Color=Yes
Brush style=6
Brush bitmap mode=12
Brush gradient mode=65
Brush gradient color=255 255 255
Brush background image=
Custom shape=
Custom text mode=0
Pen=1 0 128 0 0
Shadow color=192 192 192
Shadow=0

[DisplayPreferences\Symbol\CLDINTF]
STRNFont=Arial,8,N
STRNFont color=0 0 0
DISPNAMEFont=Arial,8,N
DISPNAMEFont color=0 0 0
CNTRFont=Arial,8,N
CNTRFont color=0 0 0
AttributesFont=Arial,8,N
AttributesFont color=0 0 0
OperationsFont=Arial,8,N
OperationsFont color=0 0 0
InnerClassifiersFont=Arial,8,N
InnerClassifiersFont color=0 0 0
LABLFont=Arial,8,N
LABLFont color=0 0 0
AutoAdjustToText=Yes
Keep aspect=No
Keep center=No
Keep size=No
Width=4800
Height=3600
Brush color=205 156 156
Fill Color=Yes
Brush style=6
Brush bitmap mode=12
Brush gradient mode=65
Brush gradient color=255 255 255
Brush background image=
Custom shape=
Custom text mode=0
Pen=1 0 128 0 0
Shadow color=192 192 192
Shadow=0

[DisplayPreferences\Symbol\OOMPORT]
DISPNAMEFont=Arial,8,N
DISPNAMEFont color=0 0 0
AutoAdjustToText=No
Keep aspect=No
Keep center=No
Keep size=No
Width=825
Height=800
Brush color=250 241 211
Fill Color=Yes
Brush style=6
Brush bitmap mode=12
Brush gradient mode=65
Brush gradient color=255 255 255
Brush background image=
Custom shape=
Custom text mode=0
Pen=1 0 128 64 0
Shadow color=192 192 192
Shadow=0

[DisplayPreferences\Symbol\CLDASSC]
DISPNAMEFont=Arial,8,N
DISPNAMEFont color=0 0 0
MULAFont=Arial,8,N
MULAFont color=0 0 0
Line style=2
Pen=1 0 128 0 64
Shadow color=192 192 192
Shadow=0

[DisplayPreferences\Symbol\INNERLINK]
Line style=2
Pen=1 0 128 0 64
Shadow color=192 192 192
Shadow=0

[DisplayPreferences\Symbol\CLDACLK]
Line style=2
Pen=2 0 128 0 64
Shadow color=192 192 192
Shadow=0

[DisplayPreferences\Symbol\GNRLLINK]
DISPNAMEFont=Arial,8,N
DISPNAMEFont color=0 0 0
Line style=2
Pen=1 0 128 0 64
Shadow color=192 192 192
Shadow=0

[DisplayPreferences\Symbol\RLZSLINK]
DISPNAMEFont=Arial,8,N
DISPNAMEFont color=0 0 0
Line style=2
Pen=3 0 128 0 64
Shadow color=192 192 192
Shadow=0

[DisplayPreferences\Symbol\RQLINK]
DISPNAMEFont=Arial,8,N
DISPNAMEFont color=0 0 0
Line style=2
Pen=1 0 128 0 64
Shadow color=192 192 192
Shadow=0

[DisplayPreferences\Symbol\DEPDLINK]
DISPNAMEFont=Arial,8,N
DISPNAMEFont color=0 0 0
Line style=2
Pen=2 0 128 0 64
Shadow color=192 192 192
Shadow=0

[DisplayPreferences\Symbol\USRDEPD]
OBJXSTRFont=Arial,8,N
OBJXSTRFont color=0 0 0
Line style=2
AutoAdjustToText=Yes
Keep aspect=No
Keep center=No
Keep size=No
Brush color=255 255 255
Fill Color=Yes
Brush style=1
Brush bitmap mode=12
Brush gradient mode=0
Brush gradient color=118 118 118
Brush background image=
Custom shape=
Custom text mode=0
Pen=2 0 128 0 64
Shadow color=192 192 192
Shadow=0

[DisplayPreferences\Symbol\Free Symbol]
Free TextFont=Arial,8,N
Free TextFont color=0 0 0
Line style=2
AutoAdjustToText=Yes
Keep aspect=No
Keep center=No
Keep size=No
Brush color=255 255 255
Fill Color=Yes
Brush style=1
Brush bitmap mode=12
Brush gradient mode=0
Brush gradient color=118 118 118
Brush background image=
Custom shape=
Custom text mode=0
Pen=1 0 128 64 0
Shadow color=192 192 192
Shadow=0</a:DisplayPreferences>
<a:PaperSize>(8268, 11693)</a:PaperSize>
<a:PageMargins>((315,354), (433,354))</a:PageMargins>
<a:PageOrientation>1</a:PageOrientation>
<a:PaperSource>7</a:PaperSource>
<c:Symbols>
<o:TextSymbol Id="o6">
<a:Text>repondre
</a:Text>
<a:CreationDate>1587565489</a:CreationDate>
<a:ModificationDate>1587568866</a:ModificationDate>
<a:Rect>((-26067,-66415), (-21268,-62516))</a:Rect>
<a:FontColor>16711680</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
<a:ManuallyResized>1</a:ManuallyResized>
</o:TextSymbol>
<o:TextSymbol Id="o7">
<a:Text>passer
</a:Text>
<a:CreationDate>1587565710</a:CreationDate>
<a:ModificationDate>1587568860</a:ModificationDate>
<a:Rect>((-25092,-62966), (-20293,-58542))</a:Rect>
<a:FontColor>16711680</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>16711680</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>16711680</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
<a:ManuallyResized>1</a:ManuallyResized>
</o:TextSymbol>
<o:TextSymbol Id="o8">
<a:Text>composer</a:Text>
<a:CreationDate>1587566111</a:CreationDate>
<a:ModificationDate>1587568873</a:ModificationDate>
<a:Rect>((-23338,-51865), (-18539,-48266))</a:Rect>
<a:FontColor>16711680</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
</o:TextSymbol>
<o:TextSymbol Id="o9">
<a:Text>dirige
</a:Text>
<a:CreationDate>1587567529</a:CreationDate>
<a:ModificationDate>1587567559</a:ModificationDate>
<a:Rect>((9999,-43947), (14798,-40348))</a:Rect>
<a:FontColor>65280</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
</o:TextSymbol>
<o:TextSymbol Id="o10">
<a:Text>s&#39;inscrir
</a:Text>
<a:CreationDate>1587567799</a:CreationDate>
<a:ModificationDate>1587567823</a:ModificationDate>
<a:Rect>((-21175,-11772), (-16376,-8173))</a:Rect>
<a:FontColor>65280</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
</o:TextSymbol>
<o:TextSymbol Id="o11">
<a:Text>suivé</a:Text>
<a:CreationDate>1587567873</a:CreationDate>
<a:ModificationDate>1587567912</a:ModificationDate>
<a:Rect>((4458,-26697), (9257,-23098))</a:Rect>
<a:FontColor>65280</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
</o:TextSymbol>
<o:TextSymbol Id="o12">
<a:Text>gérer</a:Text>
<a:CreationDate>1587568069</a:CreationDate>
<a:ModificationDate>1587568216</a:ModificationDate>
<a:Rect>((-7617,7128), (-2818,10727))</a:Rect>
<a:FontColor>65280</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
</o:TextSymbol>
<o:TextSymbol Id="o13">
<a:CreationDate>1587568987</a:CreationDate>
<a:ModificationDate>1587569272</a:ModificationDate>
<a:Rect>((-35926,3041), (-30386,5811))</a:Rect>
<a:FontColor>12615680</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
<a:ManuallyResized>1</a:ManuallyResized>
</o:TextSymbol>
<o:TextSymbol Id="o14">
<a:Text>concerne</a:Text>
<a:CreationDate>1587569041</a:CreationDate>
<a:ModificationDate>1587569070</a:ModificationDate>
<a:Rect>((-22510,19616), (-17711,23215))</a:Rect>
<a:FontColor>16744448</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
</o:TextSymbol>
<o:TextSymbol Id="o15">
<a:Text>Avoire</a:Text>
<a:CreationDate>1587569113</a:CreationDate>
<a:ModificationDate>1587569140</a:ModificationDate>
<a:Rect>((12890,1091), (17689,4690))</a:Rect>
<a:FontColor>16744448</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
</o:TextSymbol>
<o:TextSymbol Id="o16">
<a:Text>Deposer
</a:Text>
<a:CreationDate>1587569180</a:CreationDate>
<a:ModificationDate>1587569204</a:ModificationDate>
<a:Rect>((4565,2577), (9965,-1597))</a:Rect>
<a:FontColor>16744448</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>16744448</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>16744448</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
<a:ManuallyResized>1</a:ManuallyResized>
</o:TextSymbol>
<o:TextSymbol Id="o17">
<a:Text>S&#39;appui</a:Text>
<a:CreationDate>1587569214</a:CreationDate>
<a:ModificationDate>1587569241</a:ModificationDate>
<a:Rect>((-19739,-1421), (-24987,-4161))</a:Rect>
<a:FontColor>16744448</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>16744448</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>16744448</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
<a:ManuallyResized>1</a:ManuallyResized>
</o:TextSymbol>
<o:AssociationSymbol Id="o18">
<a:CreationDate>1587040851</a:CreationDate>
<a:ModificationDate>1587569174</a:ModificationDate>
<a:Rect>((-3020,-5287), (10301,9265))</a:Rect>
<a:ListOfPoints>((8314,9265),(8314,-5287),(-3020,-5287))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>12615680</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o19"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o20"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o21"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o22">
<a:CreationDate>1587042569</a:CreationDate>
<a:ModificationDate>1587569092</a:ModificationDate>
<a:Rect>((-31200,10694), (-13950,13042))</a:Rect>
<a:ListOfPoints>((-13950,11868),(-31200,11868))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>12615680</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o23"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o24"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o25"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o26">
<a:CreationDate>1587043298</a:CreationDate>
<a:ModificationDate>1587569107</a:ModificationDate>
<a:Rect>((11486,-2700), (15148,7216))</a:Rect>
<a:ListOfPoints>((11523,7216),(11523,4815),(15111,4815),(15111,-2700))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>12615680</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o19"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o27"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o28"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o29">
<a:CreationDate>1587053281</a:CreationDate>
<a:ModificationDate>1587569287</a:ModificationDate>
<a:Rect>((-35924,750), (-33300,9075))</a:Rect>
<a:ListOfPoints>((-35887,9075),(-35887,3767),(-33337,3767),(-33337,750))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>3592</a:ArrowStyle>
<a:LineColor>12615680</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o24"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o30"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o31"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o32">
<a:CreationDate>1587053352</a:CreationDate>
<a:ModificationDate>1587569092</a:ModificationDate>
<a:SourceTextOffset>(1200, -587)</a:SourceTextOffset>
<a:Rect>((-28575,-4473), (-5250,8700))</a:Rect>
<a:ListOfPoints>((-28575,8700),(-28575,-3300),(-5250,-3300))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>3592</a:ArrowStyle>
<a:LineColor>12615680</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o24"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o20"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o33"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o34">
<a:CreationDate>1587410994</a:CreationDate>
<a:ModificationDate>1587569092</a:ModificationDate>
<a:Rect>((-32137,16650), (900,20319))</a:Rect>
<a:ListOfPoints>((-30150,16650),(-30150,20319),(900,20319))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>12615680</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o24"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o35"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o36"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o37">
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587506483</a:ModificationDate>
<a:Rect>((-11194,-46176), (-5146,-31021))</a:Rect>
<a:ListOfPoints>((-5146,-45003),(-10546,-45003),(-10546,-31021))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>4194432</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o38"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o39"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o40"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o41">
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587506483</a:ModificationDate>
<a:Rect>((-32671,-48898), (-6871,-46550))</a:Rect>
<a:ListOfPoints>((-6871,-47725),(-32671,-47725))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>4194432</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o38"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o42"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o43"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o44">
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587506483</a:ModificationDate>
<a:SourceTextOffset>(38, 838)</a:SourceTextOffset>
<a:Rect>((-32445,-33487), (-19471,-22518))</a:Rect>
<a:ListOfPoints>((-19471,-23944),(-30421,-23944),(-30421,-33487))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>4194432</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o39"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o45"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o46"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o47">
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587506483</a:ModificationDate>
<a:DestinationTextOffset>(1462, 238)</a:DestinationTextOffset>
<a:Rect>((-44085,-46210), (-40247,-33262))</a:Rect>
<a:ListOfPoints>((-40846,-45037),(-42646,-45037),(-42646,-33262))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>4194432</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o42"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o48"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o49"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o50">
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587506483</a:ModificationDate>
<a:Rect>((-38596,-20925), (-18496,-19595))</a:Rect>
<a:ListOfPoints>((-18496,-19596),(-25497,-19596),(-25497,-20925),(-38596,-20925))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>4194432</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o39"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o51"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o52"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o53">
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587506483</a:ModificationDate>
<a:SourceTextOffset>(-975, -313)</a:SourceTextOffset>
<a:DestinationTextOffset>(1425, 538)</a:DestinationTextOffset>
<a:Rect>((-4846,-40255), (-497,-33412))</a:Rect>
<a:ListOfPoints>((-2859,-40255),(-2859,-33412))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>4194432</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o38"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o54"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o55"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o56">
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587506483</a:ModificationDate>
<a:Rect>((-32296,-43912), (-16697,-32071))</a:Rect>
<a:ListOfPoints>((-18721,-32071),(-18721,-43912),(-32296,-43912))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>4194432</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o39"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o42"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o57"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o58">
<a:CreationDate>1587506518</a:CreationDate>
<a:ModificationDate>1587506562</a:ModificationDate>
<a:Rect>((-32925,-15375), (-14161,2386))</a:Rect>
<a:ListOfPoints>((-15975,2386),(-16486,-15375),(-32925,-15375))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>4194432</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o23"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o51"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o59"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o60">
<a:CreationDate>1587506591</a:CreationDate>
<a:ModificationDate>1587506591</a:ModificationDate>
<a:Rect>((-9450,-28350), (-5400,3310))</a:Rect>
<a:ListOfPoints>((-9450,3310),(-5400,3310),(-5400,-28350))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>4194432</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o23"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o54"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o61"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o62">
<a:CreationDate>1587507853</a:CreationDate>
<a:ModificationDate>1587567416</a:ModificationDate>
<a:Rect>((-8848,-13050), (639,4327))</a:Rect>
<a:ListOfPoints>((-8848,4327),(602,4327),(602,-13050))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>16776960</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o23"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o63"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o64"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o65">
<a:CreationDate>1587507902</a:CreationDate>
<a:ModificationDate>1587567451</a:ModificationDate>
<a:Rect>((19802,-42900), (22352,-29250))</a:Rect>
<a:ListOfPoints>((19802,-29250),(19802,-34032),(22352,-34032),(22352,-42900))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>3336</a:ArrowStyle>
<a:LineColor>16776960</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o66"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o67"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o68"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o69">
<a:CreationDate>1587507948</a:CreationDate>
<a:ModificationDate>1587567451</a:ModificationDate>
<a:Rect>((-223,-49398), (18827,-43214))</a:Rect>
<a:ListOfPoints>((-223,-44389),(9610,-44389),(9610,-48225),(18827,-48225))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>16776960</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o38"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o67"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o70"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o71">
<a:CreationDate>1587507991</a:CreationDate>
<a:ModificationDate>1587567432</a:ModificationDate>
<a:Rect>((77,-39724), (19276,-28425))</a:Rect>
<a:ListOfPoints>((77,-39724),(17402,-39724),(17402,-28425))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>16776960</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o38"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o66"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o72"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o73">
<a:CreationDate>1587508052</a:CreationDate>
<a:ModificationDate>1587567416</a:ModificationDate>
<a:Rect>((-598,-41524), (4804,-16500))</a:Rect>
<a:ListOfPoints>((-598,-41524),(2852,-41524),(2852,-16500))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>16776960</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o38"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o63"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o74"/>
</c:Object>
</o:AssociationSymbol>
<o:GeneralizationSymbol Id="o75">
<a:CreationDate>1587565256</a:CreationDate>
<a:ModificationDate>1587566407</a:ModificationDate>
<a:Rect>((-15943,-61241), (-10918,-31316))</a:Rect>
<a:ListOfPoints>((-15943,-31316),(-15943,-45149),(-10918,-45149),(-10918,-61241))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>7</a:ArrowStyle>
<a:LineColor>16711680</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o39"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o76"/>
</c:DestinationSymbol>
<c:Object>
<o:Generalization Ref="o77"/>
</c:Object>
</o:GeneralizationSymbol>
<o:AssociationSymbol Id="o78">
<a:CreationDate>1587565294</a:CreationDate>
<a:ModificationDate>1587566429</a:ModificationDate>
<a:Rect>((-36043,-66464), (-12643,-64041))</a:Rect>
<a:ListOfPoints>((-36043,-65216),(-24065,-65216),(-24065,-65291),(-12643,-65291))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>16711680</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o79"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o76"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o80"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationClassLinkSymbol Id="o81">
<a:CreationDate>1587565392</a:CreationDate>
<a:ModificationDate>1587566436</a:ModificationDate>
<a:Rect>((-24065,-69191), (-23594,-65253))</a:Rect>
<a:ListOfPoints>((-24065,-65253),(-23594,-65253),(-23594,-69191))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>0</a:ArrowStyle>
<a:LineColor>16711680</a:LineColor>
<a:DashStyle>2</a:DashStyle>
<a:ShadowColor>12632256</a:ShadowColor>
<c:SourceSymbol>
<o:AssociationSymbol Ref="o78"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o82"/>
</c:DestinationSymbol>
<c:Object>
<o:AssociationClassLink Ref="o83"/>
</c:Object>
</o:AssociationClassLinkSymbol>
<o:AssociationSymbol Id="o84">
<a:CreationDate>1587565682</a:CreationDate>
<a:ModificationDate>1587566444</a:ModificationDate>
<a:Rect>((-35893,-63566), (-30419,-57791))</a:Rect>
<a:ListOfPoints>((-32443,-57791),(-32443,-63566),(-35893,-63566))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>3592</a:ArrowStyle>
<a:LineColor>16711680</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o85"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o79"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o86"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o87">
<a:CreationDate>1587565701</a:CreationDate>
<a:ModificationDate>1587566422</a:ModificationDate>
<a:Rect>((-29068,-63164), (-12118,-56441))</a:Rect>
<a:ListOfPoints>((-29068,-56441),(-29068,-61991),(-12118,-61991))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>16711680</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o85"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o76"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o88"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationClassLinkSymbol Id="o89">
<a:CreationDate>1587565829</a:CreationDate>
<a:ModificationDate>1587566414</a:ModificationDate>
<a:Rect>((-29068,-61991), (-17444,-55391))</a:Rect>
<a:ListOfPoints>((-29068,-61991),(-17444,-61991),(-17444,-55391))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>0</a:ArrowStyle>
<a:LineColor>16711680</a:LineColor>
<a:DashStyle>2</a:DashStyle>
<a:ShadowColor>12632256</a:ShadowColor>
<c:SourceSymbol>
<o:AssociationSymbol Ref="o87"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o90"/>
</c:DestinationSymbol>
<c:Object>
<o:AssociationClassLink Ref="o91"/>
</c:Object>
</o:AssociationClassLinkSymbol>
<o:GeneralizationSymbol Id="o92">
<a:CreationDate>1587566061</a:CreationDate>
<a:ModificationDate>1587566595</a:ModificationDate>
<a:Rect>((-54193,-63716), (-41368,-53591))</a:Rect>
<a:ListOfPoints>((-41368,-63716),(-41368,-53591),(-54193,-53591))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>7</a:ArrowStyle>
<a:LineColor>16711680</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o79"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o93"/>
</c:DestinationSymbol>
<c:Object>
<o:Generalization Ref="o94"/>
</c:Object>
</o:GeneralizationSymbol>
<o:GeneralizationSymbol Id="o95">
<a:CreationDate>1587566063</a:CreationDate>
<a:ModificationDate>1587566597</a:ModificationDate>
<a:Rect>((-55768,-64016), (-42793,-58916))</a:Rect>
<a:ListOfPoints>((-42793,-64016),(-42793,-58916),(-55768,-58916))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>7</a:ArrowStyle>
<a:LineColor>16711680</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o79"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o96"/>
</c:DestinationSymbol>
<c:Object>
<o:Generalization Ref="o97"/>
</c:Object>
</o:GeneralizationSymbol>
<o:GeneralizationSymbol Id="o98">
<a:CreationDate>1587566065</a:CreationDate>
<a:ModificationDate>1587566599</a:ModificationDate>
<a:Rect>((-55618,-65753), (-41218,-64753))</a:Rect>
<a:ListOfPoints>((-41218,-65253),(-55618,-65253))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>7</a:ArrowStyle>
<a:LineColor>16711680</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o79"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o99"/>
</c:DestinationSymbol>
<c:Object>
<o:Generalization Ref="o100"/>
</c:Object>
</o:GeneralizationSymbol>
<o:AssociationSymbol Id="o101">
<a:CreationDate>1587566103</a:CreationDate>
<a:ModificationDate>1587566575</a:ModificationDate>
<a:Rect>((-30388,-53216), (-5714,-48858))</a:Rect>
<a:ListOfPoints>((-28364,-53216),(-28364,-49345),(-5714,-49345))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>16711680</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o85"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o38"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o102"/>
</c:Object>
</o:AssociationSymbol>
<o:GeneralizationSymbol Id="o103">
<a:CreationDate>1587566199</a:CreationDate>
<a:ModificationDate>1587569317</a:ModificationDate>
<a:Rect>((-5009,-64178), (10366,-63178))</a:Rect>
<a:ListOfPoints>((10366,-63678),(-5009,-63678))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>7</a:ArrowStyle>
<a:LineColor>16711680</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o104"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o76"/>
</c:DestinationSymbol>
<c:Object>
<o:Generalization Ref="o105"/>
</c:Object>
</o:GeneralizationSymbol>
<o:GeneralizationSymbol Id="o106">
<a:CreationDate>1587566260</a:CreationDate>
<a:ModificationDate>1587566298</a:ModificationDate>
<a:Rect>((-4409,-62661), (7366,7881))</a:Rect>
<a:ListOfPoints>((7366,7881),(-4409,7881),(-4409,-62661))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>7</a:ArrowStyle>
<a:LineColor>16711680</a:LineColor>
<a:ShadowColor>16711680</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o19"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o76"/>
</c:DestinationSymbol>
<c:Object>
<o:Generalization Ref="o107"/>
</c:Object>
</o:GeneralizationSymbol>
<o:AssociationSymbol Id="o108">
<a:CreationDate>1587567129</a:CreationDate>
<a:ModificationDate>1587569303</a:ModificationDate>
<a:Rect>((32191,-16465), (38116,-7990))</a:Rect>
<a:ListOfPoints>((32191,-7990),(38116,-7990),(38116,-16465))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>65280</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o109"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o110"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o111"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o112">
<a:CreationDate>1587567199</a:CreationDate>
<a:ModificationDate>1587568256</a:ModificationDate>
<a:Rect>((-10526,-21116), (30124,-6641))</a:Rect>
<a:ListOfPoints>((-10526,-21116),(30124,-21116),(30124,-6641))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>65280</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o39"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o109"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o113"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o114">
<a:CreationDate>1587567325</a:CreationDate>
<a:ModificationDate>1587569303</a:ModificationDate>
<a:Rect>((-1027,-46433), (37673,-20098))</a:Rect>
<a:ListOfPoints>((-1027,-46433),(37673,-46433),(37673,-20098))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>65280</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o38"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o110"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o115"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o116">
<a:CreationDate>1587567387</a:CreationDate>
<a:ModificationDate>1587567545</a:ModificationDate>
<a:Rect>((173,-41113), (26047,-30148))</a:Rect>
<a:ListOfPoints>((173,-41113),(24173,-41113),(24173,-30148))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>65280</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o38"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o66"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o117"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o118">
<a:CreationDate>1587567614</a:CreationDate>
<a:ModificationDate>1587567648</a:ModificationDate>
<a:Rect>((-726,-41359), (1561,12856))</a:Rect>
<a:ListOfPoints>((1373,12856),(1373,-14099),(1148,-14099),(1148,-41359))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>65280</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o35"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o38"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o119"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o120">
<a:CreationDate>1587567691</a:CreationDate>
<a:ModificationDate>1587567785</a:ModificationDate>
<a:Rect>((-20688,-21149), (-5576,16951))</a:Rect>
<a:ListOfPoints>((-18701,-21149),(-18701,16951),(-5576,16951))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>65280</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o39"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o35"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o121"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o122">
<a:CreationDate>1587567850</a:CreationDate>
<a:ModificationDate>1587669346</a:ModificationDate>
<a:Rect>((-11143,-26764), (18095,-23098))</a:Rect>
<a:ListOfPoints>((-11143,-23098),(5014,-23098),(5014,-26764),(18095,-26764))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>65280</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o39"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o66"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o123"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o124">
<a:CreationDate>1587567977</a:CreationDate>
<a:ModificationDate>1587669329</a:ModificationDate>
<a:Rect>((3482,-25391), (17748,13052))</a:Rect>
<a:ListOfPoints>((3482,13052),(3482,-25391),(17748,-25391))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>3336</a:ArrowStyle>
<a:LineColor>65280</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o35"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o66"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o125"/>
</c:Object>
</o:AssociationSymbol>
<o:AssociationSymbol Id="o126">
<a:CreationDate>1587568039</a:CreationDate>
<a:ModificationDate>1587568187</a:ModificationDate>
<a:SourceTextOffset>(1312, -838)</a:SourceTextOffset>
<a:DestinationTextOffset>(-113, -2912)</a:DestinationTextOffset>
<a:Rect>((-8518,10058), (-4543,13277))</a:Rect>
<a:ListOfPoints>((-8518,10058),(-4543,10058),(-4543,13277))</a:ListOfPoints>
<a:CornerStyle>2</a:CornerStyle>
<a:ArrowStyle>8</a:ArrowStyle>
<a:LineColor>65280</a:LineColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>DISPNAME 0 Arial,8,N
MULA 0 Arial,8,N</a:FontList>
<c:SourceSymbol>
<o:ClassSymbol Ref="o23"/>
</c:SourceSymbol>
<c:DestinationSymbol>
<o:ClassSymbol Ref="o35"/>
</c:DestinationSymbol>
<c:Object>
<o:Association Ref="o127"/>
</c:Object>
</o:AssociationSymbol>
<o:ClassSymbol Id="o35">
<a:CreationDate>1587040851</a:CreationDate>
<a:ModificationDate>1587411006</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-6383,11894), (3941,20324))</a:Rect>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>12615680</a:LineColor>
<a:FillColor>16109434</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Times New Roman,22,B
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<a:ManuallyResized>1</a:ManuallyResized>
<c:Object>
<o:Class Ref="o128"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o19">
<a:CreationDate>1587040851</a:CreationDate>
<a:ModificationDate>1587506774</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((6300,6675), (17410,20727))</a:Rect>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>12615680</a:LineColor>
<a:FillColor>16109434</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Times New Roman,22,B
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<a:ManuallyResized>1</a:ManuallyResized>
<c:Object>
<o:Class Ref="o129"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o20">
<a:CreationDate>1587040851</a:CreationDate>
<a:ModificationDate>1587568899</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-14530,-11206), (-962,-2518))</a:Rect>
<a:LineColor>12615680</a:LineColor>
<a:FillColor>16109434</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Times New Roman,22,B
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o130"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o27">
<a:CreationDate>1587040851</a:CreationDate>
<a:ModificationDate>1587569107</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((11021,-16801), (21191,-269))</a:Rect>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>12615680</a:LineColor>
<a:FillColor>16109434</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Times New Roman,22,B
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<a:ManuallyResized>1</a:ManuallyResized>
<c:Object>
<o:Class Ref="o131"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o23">
<a:CreationDate>1587040851</a:CreationDate>
<a:ModificationDate>1587568451</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-17858,-516), (-7380,14990))</a:Rect>
<a:LineColor>12615680</a:LineColor>
<a:FillColor>65280</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Times New Roman,22,B
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o132"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o30">
<a:CreationDate>1587040925</a:CreationDate>
<a:ModificationDate>1587569287</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-44032,-8212), (-29770,1084))</a:Rect>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>12615680</a:LineColor>
<a:FillColor>16109434</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<a:ManuallyResized>1</a:ManuallyResized>
<c:Object>
<o:Class Ref="o133"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o24">
<a:CreationDate>1587040927</a:CreationDate>
<a:ModificationDate>1587569092</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-39808,8024), (-27244,16982))</a:Rect>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>12615680</a:LineColor>
<a:FillColor>16109434</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<a:ManuallyResized>1</a:ManuallyResized>
<c:Object>
<o:Class Ref="o134"/>
</c:Object>
</o:ClassSymbol>
<o:TextSymbol Id="o135">
<a:Text>Lancer
</a:Text>
<a:CreationDate>1587043243</a:CreationDate>
<a:ModificationDate>1587569094</a:ModificationDate>
<a:Rect>((-25501,11925), (-20589,14476))</a:Rect>
<a:FontColor>12615680</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>16109434</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,11,B</a:FontName>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:ManuallyResized>1</a:ManuallyResized>
</o:TextSymbol>
<o:TextSymbol Id="o136">
<a:Text>Encadre
</a:Text>
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587568774</a:ModificationDate>
<a:Rect>((-12645,-38136), (-7845,-35737))</a:Rect>
<a:FontColor>16512</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
<a:ManuallyResized>1</a:ManuallyResized>
</o:TextSymbol>
<o:TextSymbol Id="o137">
<a:Text>Suivre

</a:Text>
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587568845</a:ModificationDate>
<a:Rect>((-23595,-48786), (-18796,-45787))</a:Rect>
<a:FontColor>16512</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,8,N</a:FontName>
<a:ManuallyResized>1</a:ManuallyResized>
</o:TextSymbol>
<o:TextSymbol Id="o138">
<a:Text>Avoir</a:Text>
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587568803</a:ModificationDate>
<a:Rect>((-32070,-29136), (-27271,-25537))</a:Rect>
<a:FontColor>16512</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
</o:TextSymbol>
<o:TextSymbol Id="o139">
<a:Text>Contenir
</a:Text>
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587568835</a:ModificationDate>
<a:Rect>((-46620,-40387), (-41821,-37462))</a:Rect>
<a:FontColor>16512</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
<a:ManuallyResized>1</a:ManuallyResized>
</o:TextSymbol>
<o:TextSymbol Id="o140">
<a:Text>Remplir</a:Text>
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587568812</a:ModificationDate>
<a:Rect>((-25845,-22161), (-21046,-19236))</a:Rect>
<a:FontColor>16512</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
<a:ManuallyResized>1</a:ManuallyResized>
</o:TextSymbol>
<o:TextSymbol Id="o141">
<a:Text>Propose</a:Text>
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587568787</a:ModificationDate>
<a:Rect>((-3570,-38212), (105,-36187))</a:Rect>
<a:FontColor>16512</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
<a:ManuallyResized>1</a:ManuallyResized>
</o:TextSymbol>
<o:TextSymbol Id="o142">
<a:Text>Realiser</a:Text>
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587568768</a:ModificationDate>
<a:Rect>((-21496,-40087), (-17521,-37612))</a:Rect>
<a:FontColor>16512</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
<a:ManuallyResized>1</a:ManuallyResized>
</o:TextSymbol>
<o:TextSymbol Id="o143">
<a:Text>Gérer</a:Text>
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587568823</a:ModificationDate>
<a:Rect>((-24420,-16911), (-19621,-13312))</a:Rect>
<a:FontColor>16512</a:FontColor>
<a:TextStyle>4130</a:TextStyle>
<a:LineColor>0</a:LineColor>
<a:DashStyle>7</a:DashStyle>
<a:FillColor>0</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontName>Arial,9,N</a:FontName>
</o:TextSymbol>
<o:ClassSymbol Id="o39">
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587568444</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-19604,-32543), (-9436,-18983))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>65280</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o144"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o45">
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587506483</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-32645,-37722), (-23095,-31954))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>8637161</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o145"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o51">
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587506483</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-43104,-23206), (-31390,-12568))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>8637161</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o146"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o48">
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587506483</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-46747,-35656), (-37043,-25018))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>8637161</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o147"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o54">
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587506483</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-6786,-34421), (3846,-26705))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>8637161</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o148"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o38">
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587568436</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-7970,-51218), (1580,-39608))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>65280</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o149"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o42">
<a:CreationDate>1587506458</a:CreationDate>
<a:ModificationDate>1587506483</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-40861,-50694), (-31079,-39082))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>8637161</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o150"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o67">
<a:CreationDate>1587507090</a:CreationDate>
<a:ModificationDate>1587567451</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((17566,-55269), (28044,-42683))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>16776960</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o151"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o63">
<a:CreationDate>1587507402</a:CreationDate>
<a:ModificationDate>1587567416</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-686,-18675), (8788,-11399))</a:Rect>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>128</a:LineColor>
<a:FillColor>16776960</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<a:ManuallyResized>1</a:ManuallyResized>
<c:Object>
<o:Class Ref="o152"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o66">
<a:CreationDate>1587507498</a:CreationDate>
<a:ModificationDate>1587567432</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((16198,-30408), (25054,-22692))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>16776960</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o153"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o76">
<a:CreationDate>1587564824</a:CreationDate>
<a:ModificationDate>1587565538</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-13677,-67842), (-2503,-59783))</a:Rect>
<a:AutoAdjustToText>0</a:AutoAdjustToText>
<a:LineColor>128</a:LineColor>
<a:FillColor>16711680</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<a:ManuallyResized>1</a:ManuallyResized>
<c:Object>
<o:Class Ref="o154"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o104">
<a:CreationDate>1587564968</a:CreationDate>
<a:ModificationDate>1587569317</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((8863,-65699), (17179,-57983))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>16711680</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o155"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o82">
<a:CreationDate>1587565091</a:CreationDate>
<a:ModificationDate>1587565551</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-27481,-71102), (-19707,-67281))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>16711680</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o156"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o79">
<a:CreationDate>1587565093</a:CreationDate>
<a:ModificationDate>1587565535</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-44081,-67950), (-34453,-62182))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>16711680</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o157"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o85">
<a:CreationDate>1587565564</a:CreationDate>
<a:ModificationDate>1587565840</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-36351,-58949), (-27033,-51233))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>16711680</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o158"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o90">
<a:CreationDate>1587565761</a:CreationDate>
<a:ModificationDate>1587566093</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-20945,-57302), (-13943,-53481))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>16711680</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o159"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o93">
<a:CreationDate>1587565937</a:CreationDate>
<a:ModificationDate>1587566595</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-60256,-55202), (-52482,-51381))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>16711680</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o160"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o96">
<a:CreationDate>1587565938</a:CreationDate>
<a:ModificationDate>1587566597</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-61681,-61052), (-53907,-57231))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>16711680</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o161"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o99">
<a:CreationDate>1587565939</a:CreationDate>
<a:ModificationDate>1587566599</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((-61156,-67427), (-53382,-63606))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>16711680</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o162"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o109">
<a:CreationDate>1587566756</a:CreationDate>
<a:ModificationDate>1587568256</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((27053,-8624), (35677,-2856))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>65280</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o163"/>
</c:Object>
</o:ClassSymbol>
<o:ClassSymbol Id="o110">
<a:CreationDate>1587566756</a:CreationDate>
<a:ModificationDate>1587569303</a:ModificationDate>
<a:IconMode>-1</a:IconMode>
<a:Rect>((35178,-21711), (44652,-14969))</a:Rect>
<a:LineColor>128</a:LineColor>
<a:FillColor>65280</a:FillColor>
<a:ShadowColor>12632256</a:ShadowColor>
<a:FontList>STRN 0 Arial,8,N
DISPNAME 0 Arial,8,N
CNTR 0 Arial,8,N
Attributes 0 Arial,8,N
ClassPrimaryAttribute 0 Arial,8,U
Operations 0 Arial,8,N
InnerClassifiers 0 Arial,8,N
LABL 0 Arial,8,N</a:FontList>
<a:BrushStyle>6</a:BrushStyle>
<a:GradientFillMode>65</a:GradientFillMode>
<a:GradientEndColor>16777215</a:GradientEndColor>
<c:Object>
<o:Class Ref="o164"/>
</c:Object>
</o:ClassSymbol>
</c:Symbols>
</o:ClassDiagram>
</c:ClassDiagrams>
<c:DefaultDiagram>
<o:ClassDiagram Ref="o5"/>
</c:DefaultDiagram>
<c:Classes>
<o:Class Id="o128">
<a:ObjectID>5E7F7E32-AC1D-4BEF-9532-F5FA54EEB374</a:ObjectID>
<a:Name>Filière</a:Name>
<a:Code>Filiere</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587506853</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o165">
<a:ObjectID>EF73B8E6-07D8-43C5-8C7D-DD675542CF0C</a:ObjectID>
<a:Name>ID_Filière</a:Name>
<a:Code>idFiliere</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o166">
<a:ObjectID>9E56073F-4F5E-494B-992E-D44C6825CD9B</a:ObjectID>
<a:Name>Nom_Filière</a:Name>
<a:Code>nomFiliere</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
<c:Operations>
<o:Operation Id="o167">
<a:ObjectID>BA811C6E-0816-4903-93CE-197DB2695BEF</a:ObjectID>
<a:Name>Ajouter une filière</a:Name>
<a:Code>ajouterUneFiliere</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o168">
<a:ObjectID>369DA752-A6D0-4D12-B88E-24D4893F166D</a:ObjectID>
<a:Name>Modifier une filière</a:Name>
<a:Code>modifierUneFiliere</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o169">
<a:ObjectID>94FFA5D5-F851-4B9A-B7F1-7F8EB1C4C5E3</a:ObjectID>
<a:Name>Supprimer une filière</a:Name>
<a:Code>supprimerUneFiliere</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
</c:Operations>
<c:Identifiers>
<o:Identifier Id="o170">
<a:ObjectID>4E796AB1-42BB-45A9-BA27-01A95DA56F68</a:ObjectID>
<a:Name>Identifiant_1</a:Name>
<a:Code>Identifiant_1</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<c:Identifier.Attributes>
<o:Attribute Ref="o165"/>
</c:Identifier.Attributes>
</o:Identifier>
</c:Identifiers>
<c:PrimaryIdentifier>
<o:Identifier Ref="o170"/>
</c:PrimaryIdentifier>
</o:Class>
<o:Class Id="o129">
<a:ObjectID>C3793157-16EF-42AE-B43F-EA21A3738889</a:ObjectID>
<a:Name>Candidat</a:Name>
<a:Code>Candidat</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587506870</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o171">
<a:ObjectID>A0BC13FF-37B6-4A58-8848-D99947DE3753</a:ObjectID>
<a:Name>CIN</a:Name>
<a:Code>cin</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o172">
<a:ObjectID>9300C009-97B7-4EAE-A5BD-DF6E86C6A3E0</a:ObjectID>
<a:Name>Prenom</a:Name>
<a:Code>prenom</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o173">
<a:ObjectID>19B86C71-3CBB-4992-9E4F-97AFAB47D1D4</a:ObjectID>
<a:Name>Nom</a:Name>
<a:Code>nom</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o174">
<a:ObjectID>A4932A1D-CB48-44B2-97BF-CFC7DDB66978</a:ObjectID>
<a:Name>Date_Naissance</a:Name>
<a:Code>dateNaissance</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>Date</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o175">
<a:ObjectID>A2ED0FAF-AD1A-46B5-8801-627F8F222981</a:ObjectID>
<a:Name>Adresse</a:Name>
<a:Code>adresse</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o176">
<a:ObjectID>2F25CF27-5DDE-4B00-A52E-7FF8B386A677</a:ObjectID>
<a:Name>Sexe</a:Name>
<a:Code>sexe</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o177">
<a:ObjectID>AE3242C0-712E-44DF-A98C-7346E19936FA</a:ObjectID>
<a:Name>E_mail</a:Name>
<a:Code>eMail</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o178">
<a:ObjectID>FD0EE347-5B3C-48E1-9991-EFDFF497E6AB</a:ObjectID>
<a:Name>Etat_Civil</a:Name>
<a:Code>etatCivil</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o179">
<a:ObjectID>80F14DD3-85FA-4E46-8CE9-3A41656B9733</a:ObjectID>
<a:Name>Nationalite</a:Name>
<a:Code>nationalite</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o180">
<a:ObjectID>23624719-0982-4F51-8C0E-1DDCFF419221</a:ObjectID>
<a:Name>Code_Postal</a:Name>
<a:Code>codePostal</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o181">
<a:ObjectID>0E0993DC-DA0A-47A2-B550-D3EF44172CB0</a:ObjectID>
<a:Name>Tel</a:Name>
<a:Code>tel</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o182">
<a:ObjectID>A1D7E0AA-4D90-45FF-9EFE-E8970D4C906C</a:ObjectID>
<a:Name>Date_Dossier</a:Name>
<a:Code>dateDossier</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>Date</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
<c:Identifiers>
<o:Identifier Id="o183">
<a:ObjectID>CEED9EDD-16F9-4B69-9467-BF4A5DB790A0</a:ObjectID>
<a:Name>Identifiant_1</a:Name>
<a:Code>Identifiant_1</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<c:Identifier.Attributes>
<o:Attribute Ref="o171"/>
</c:Identifier.Attributes>
</o:Identifier>
</c:Identifiers>
<c:PrimaryIdentifier>
<o:Identifier Ref="o183"/>
</c:PrimaryIdentifier>
</o:Class>
<o:Class Id="o130">
<a:ObjectID>C6E7A911-3501-4A5B-87FB-951E2E402BD5</a:ObjectID>
<a:Name>Candidature</a:Name>
<a:Code>Candidature</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587506863</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o184">
<a:ObjectID>B0D44555-FAA6-4656-9006-1474A02A241C</a:ObjectID>
<a:Name>ID_CAN</a:Name>
<a:Code>idCan</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o185">
<a:ObjectID>7224A291-9A0B-4E1A-9C53-18A24F72111A</a:ObjectID>
<a:Name>Section_Act</a:Name>
<a:Code>sectionAct</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o186">
<a:ObjectID>3CFE1990-1F7D-4BCC-A9D3-4136817105B0</a:ObjectID>
<a:Name>Niveau_Univ_Demande</a:Name>
<a:Code>niveauUnivDemande</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o187">
<a:ObjectID>B9E8F39B-4152-41E6-B7C4-5BFEB8A1D3C2</a:ObjectID>
<a:Name>Moyenne_Bac</a:Name>
<a:Code>moyenneBac</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>float</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
<c:Operations>
<o:Operation Id="o188">
<a:ObjectID>2D7E7C01-1BA2-4A76-9F46-1456377961B4</a:ObjectID>
<a:Name>Ajouter une candidature</a:Name>
<a:Code>ajouterUneCandidature</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o189">
<a:ObjectID>64CF9CF0-124F-4B03-8673-6DE6C5425F30</a:ObjectID>
<a:Name>Modifier une candidature</a:Name>
<a:Code>modifierUneCandidature</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o190">
<a:ObjectID>6FB21109-A8AD-4484-922A-2DA130A80836</a:ObjectID>
<a:Name>Supprimer une candidature</a:Name>
<a:Code>supprimerUneCandidature</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
</c:Operations>
<c:Identifiers>
<o:Identifier Id="o191">
<a:ObjectID>CCC3839F-255D-4E4D-AB0C-CCC4019B518E</a:ObjectID>
<a:Name>Identifiant_1</a:Name>
<a:Code>Identifiant_1</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<c:Identifier.Attributes>
<o:Attribute Ref="o184"/>
</c:Identifier.Attributes>
</o:Identifier>
</c:Identifiers>
<c:PrimaryIdentifier>
<o:Identifier Ref="o191"/>
</c:PrimaryIdentifier>
</o:Class>
<o:Class Id="o131">
<a:ObjectID>6C991E42-D177-4E12-9E3A-236FEF8381F7</a:ObjectID>
<a:Name>Parcours</a:Name>
<a:Code>Parcours</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587506870</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o192">
<a:ObjectID>DF4FBBE1-D49C-4B7C-A4D4-291A2D9AB285</a:ObjectID>
<a:Name>IDP</a:Name>
<a:Code>idp</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587042221</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o193">
<a:ObjectID>D0CD2B30-A314-46BD-95F0-BBDC302547D1</a:ObjectID>
<a:Name>Annee_Bac</a:Name>
<a:Code>anneeBac</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o194">
<a:ObjectID>F66F0209-D15D-4568-B1DB-271446675C0F</a:ObjectID>
<a:Name>Option_Bac</a:Name>
<a:Code>optionBac</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o195">
<a:ObjectID>F8174745-8CC0-4310-B0A6-ADB68E845424</a:ObjectID>
<a:Name>Moyenne_Bac</a:Name>
<a:Code>moyenneBac</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>float</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o196">
<a:ObjectID>5EA98A10-02DC-4107-93E0-03CF33D8BCEF</a:ObjectID>
<a:Name>Annee_Univ</a:Name>
<a:Code>anneeUniv</a:Code>
<a:CreationDate>1587042074</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587042221</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o197">
<a:ObjectID>D48CB264-4754-4A3E-A6E6-9E89ED102E8F</a:ObjectID>
<a:Name>Type_Univ</a:Name>
<a:Code>typeUniv</a:Code>
<a:CreationDate>1587042074</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587042221</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o198">
<a:ObjectID>9A16059D-39E3-4D81-ABB0-115F55D24A0F</a:ObjectID>
<a:Name>Option_Univ</a:Name>
<a:Code>optionUniv</a:Code>
<a:CreationDate>1587042074</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587042221</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o199">
<a:ObjectID>FF98BC96-36D2-496B-9BFF-67C2B12DC073</a:ObjectID>
<a:Name>Niveau_Univ</a:Name>
<a:Code>niveauUniv</a:Code>
<a:CreationDate>1587042074</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587042221</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o200">
<a:ObjectID>3A0FA248-1BDE-4D59-BDB1-4FE9B5A4FAEA</a:ObjectID>
<a:Name>Etab_Univ</a:Name>
<a:Code>etabUniv</a:Code>
<a:CreationDate>1587042074</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587042221</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o201">
<a:ObjectID>94EF7AA5-C5DE-454A-8EC1-DF2695DF4065</a:ObjectID>
<a:Name>Resultat_Univ</a:Name>
<a:Code>resultatUniv</a:Code>
<a:CreationDate>1587042074</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587042221</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o202">
<a:ObjectID>CBF32CA7-21CF-4394-9A15-476E253FA7C3</a:ObjectID>
<a:Name>Moyenne_Univ</a:Name>
<a:Code>moyenneUniv</a:Code>
<a:CreationDate>1587042074</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587042221</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>float</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
<c:Operations>
<o:Operation Id="o203">
<a:ObjectID>2E9C1F77-6BC1-40DB-A9FB-7AF4FFCCDE2F</a:ObjectID>
<a:Name>Ajouter un cursus</a:Name>
<a:Code>ajouterUnCursus</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o204">
<a:ObjectID>8526CB57-1305-4BA1-AD25-E23901C62FF5</a:ObjectID>
<a:Name>Modifier un cursus</a:Name>
<a:Code>modifierUnCursus</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o205">
<a:ObjectID>E2798D55-8869-4881-ABC0-DA8546AC7D12</a:ObjectID>
<a:Name>Supprimer un cursus</a:Name>
<a:Code>supprimerUnCursus</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
</c:Operations>
<c:Identifiers>
<o:Identifier Id="o206">
<a:ObjectID>7854B797-9726-46F8-9669-476FDB5889A8</a:ObjectID>
<a:Name>Identifiant_1</a:Name>
<a:Code>Identifiant_1</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<c:Identifier.Attributes>
<o:Attribute Ref="o192"/>
</c:Identifier.Attributes>
</o:Identifier>
</c:Identifiers>
<c:PrimaryIdentifier>
<o:Identifier Ref="o206"/>
</c:PrimaryIdentifier>
</o:Class>
<o:Class Id="o132">
<a:ObjectID>7CC81581-6644-4780-AD89-9034A6D46D09</a:ObjectID>
<a:Name>Admin</a:Name>
<a:Code>Admin</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587568566</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o207">
<a:ObjectID>539B5355-948E-4B32-91B5-CF39E468B0DD</a:ObjectID>
<a:Name>ID_Ad</a:Name>
<a:Code>idAd</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o208">
<a:ObjectID>250631AE-1C51-4878-A7C2-8C3E38AD8EBD</a:ObjectID>
<a:Name>Login</a:Name>
<a:Code>login</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o209">
<a:ObjectID>66A5F348-23AA-4A53-A5BA-541F4B24AD21</a:ObjectID>
<a:Name>Password</a:Name>
<a:Code>password</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o210">
<a:ObjectID>701E5D5F-C31B-4E95-96C7-CFA8C6CF2E66</a:ObjectID>
<a:Name>Profession</a:Name>
<a:Code>profession</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
<c:Operations>
<o:Operation Id="o211">
<a:ObjectID>3F83D3DC-05A5-4817-AFF7-29DB6F5392AE</a:ObjectID>
<a:Name>Ajouter un compte</a:Name>
<a:Code>ajouterUnCompte</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o212">
<a:ObjectID>4620D1DF-031F-44D6-89BA-D522FE616F37</a:ObjectID>
<a:Name>Modifier un compte</a:Name>
<a:Code>modifierUnCompte</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o213">
<a:ObjectID>EBFB8D75-DDC2-4A4E-8C16-9870B4D59638</a:ObjectID>
<a:Name>Supprimer un compte</a:Name>
<a:Code>supprimerUnCompte</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o214">
<a:ObjectID>22086B20-1A88-42B3-9CD1-C078774D9F7E</a:ObjectID>
<a:Name>Valider candidature</a:Name>
<a:Code>validerCandidature</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o215">
<a:ObjectID>FC71B517-DC93-4B7F-B20F-8DB83E07F9F6</a:ObjectID>
<a:Name>Lister candidature</a:Name>
<a:Code>listerCandidature</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o216">
<a:ObjectID>70937FAB-24A5-41AB-9C28-0F3E79EED769</a:ObjectID>
<a:Name>Lancer résultat</a:Name>
<a:Code>lancerResultat</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o217">
<a:ObjectID>EB4EFBBD-C4D9-4133-8DC2-90D5FBEA99A8</a:ObjectID>
<a:Name>Notifier les admis</a:Name>
<a:Code>notifierLesAdmis</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o218">
<a:ObjectID>0320F62D-DB86-42B8-8E3C-9D936970196B</a:ObjectID>
<a:Name>GererEtudiant</a:Name>
<a:Code>gererEtudiant</a:Code>
<a:CreationDate>1587568492</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568566</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o219">
<a:ObjectID>73414ABC-5CBE-4AB2-B2E7-20B9912A6133</a:ObjectID>
<a:Name>GererProf</a:Name>
<a:Code>gererProf</a:Code>
<a:CreationDate>1587568492</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568566</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o220">
<a:ObjectID>6F769B7C-CD8F-4839-BD85-70FC1C2DF5B6</a:ObjectID>
<a:Name>GererFilier</a:Name>
<a:Code>gererFilier</a:Code>
<a:CreationDate>1587568492</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568566</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
</c:Operations>
<c:Identifiers>
<o:Identifier Id="o221">
<a:ObjectID>714E4A98-C2A2-45D0-AF5B-6E707DA60670</a:ObjectID>
<a:Name>Identifiant_1</a:Name>
<a:Code>Identifiant_1</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040851</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<c:Identifier.Attributes>
<o:Attribute Ref="o207"/>
</c:Identifier.Attributes>
</o:Identifier>
</c:Identifiers>
<c:PrimaryIdentifier>
<o:Identifier Ref="o221"/>
</c:PrimaryIdentifier>
</o:Class>
<o:Class Id="o133">
<a:ObjectID>C1F9FFDE-1E02-4C0E-BE63-E37AD1A4EFD3</a:ObjectID>
<a:Name>Critères</a:Name>
<a:Code>Criteres</a:Code>
<a:CreationDate>1587040925</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587506821</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o222">
<a:ObjectID>00EAA3A9-0441-4745-A0A4-83659DCA0EAA</a:ObjectID>
<a:Name>ID_Critère</a:Name>
<a:Code>idCritere</a:Code>
<a:CreationDate>1587041671</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587042041</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o223">
<a:ObjectID>22846426-2D75-4D00-8EF7-2299DD2B859F</a:ObjectID>
<a:Name>AgeC</a:Name>
<a:Code>ageC</a:Code>
<a:CreationDate>1587041671</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587042038</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o224">
<a:ObjectID>CA51FEDE-579A-4762-AFD3-9C2FDDD78DF0</a:ObjectID>
<a:Name>Date_Obtention_Diplome</a:Name>
<a:Code>dateObtentionDiplome</a:Code>
<a:CreationDate>1587041671</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587042038</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>Date</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o225">
<a:ObjectID>E33E6114-1BBA-42CF-BF4B-3F36328ED3A7</a:ObjectID>
<a:Name>Specialite</a:Name>
<a:Code>specialite</a:Code>
<a:CreationDate>1587041671</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587042038</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o226">
<a:ObjectID>C175BDB4-A667-4BDD-B16B-BDD6C9033CBA</a:ObjectID>
<a:Name>Mention</a:Name>
<a:Code>mention</a:Code>
<a:CreationDate>1587041671</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587042038</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
<c:Identifiers>
<o:Identifier Id="o227">
<a:ObjectID>EC8354B1-B73D-43B4-B0BA-51A4F7516D8D</a:ObjectID>
<a:Name>Identifiant_1</a:Name>
<a:Code>Identifiant_1</a:Code>
<a:CreationDate>1587042038</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587042041</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<c:Identifier.Attributes>
<o:Attribute Ref="o222"/>
</c:Identifier.Attributes>
</o:Identifier>
</c:Identifiers>
<c:PrimaryIdentifier>
<o:Identifier Ref="o227"/>
</c:PrimaryIdentifier>
</o:Class>
<o:Class Id="o134">
<a:ObjectID>90FBC815-AB43-4A2D-8F77-9B99B8346424</a:ObjectID>
<a:Name>Concours</a:Name>
<a:Code>Concours</a:Code>
<a:CreationDate>1587040927</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587506841</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o228">
<a:ObjectID>CD057D10-09A0-4943-B212-CD1C8F87221D</a:ObjectID>
<a:Name>ID_Cnc</a:Name>
<a:Code>idCnc</a:Code>
<a:CreationDate>1587040931</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587041659</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o229">
<a:ObjectID>C2623605-A142-41DC-BCE6-A60B860035FC</a:ObjectID>
<a:Name>Titre_Cnc</a:Name>
<a:Code>titreCnc</a:Code>
<a:CreationDate>1587040931</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587041659</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o230">
<a:ObjectID>0FF8FAD1-654B-453B-B2DB-5A5FDAB37DEB</a:ObjectID>
<a:Name>Date_Echeance</a:Name>
<a:Code>dateEcheance</a:Code>
<a:CreationDate>1587040931</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587041659</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>Date</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o231">
<a:ObjectID>CA095DB9-04B4-47CB-BC3C-5B8ECFF85C6E</a:ObjectID>
<a:Name>Objectifs_Cnc</a:Name>
<a:Code>objectifsCnc</a:Code>
<a:CreationDate>1587041469</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587041659</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o232">
<a:ObjectID>2AFC9C48-4896-405B-9153-FC4DC7C502A6</a:ObjectID>
<a:Name>Procédure_Selection</a:Name>
<a:Code>procedureSelection</a:Code>
<a:CreationDate>1587041469</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587041659</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
<c:Identifiers>
<o:Identifier Id="o233">
<a:ObjectID>798BC3FA-A7A0-4D93-8A50-2A7E7FB231E2</a:ObjectID>
<a:Name>Identifiant_1</a:Name>
<a:Code>Identifiant_1</a:Code>
<a:CreationDate>1587041026</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587041030</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<c:Identifier.Attributes>
<o:Attribute Ref="o228"/>
</c:Identifier.Attributes>
</o:Identifier>
</c:Identifiers>
<c:PrimaryIdentifier>
<o:Identifier Ref="o233"/>
</c:PrimaryIdentifier>
</o:Class>
<o:Class Id="o144">
<a:ObjectID>4B08EC02-CC37-4192-8157-CB0BC49D0999</a:ObjectID>
<a:Name>Etudiant</a:Name>
<a:Code>Etudiant</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568603</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o234">
<a:ObjectID>331A21D5-7652-46A6-8674-6F7C728928E3</a:ObjectID>
<a:Name>id</a:Name>
<a:Code>id</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o235">
<a:ObjectID>3F662920-765C-4DF0-AED6-C2A05B886B70</a:ObjectID>
<a:Name>nom</a:Name>
<a:Code>nom</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o236">
<a:ObjectID>EDFD6054-F690-4C6C-869F-91E1F8952405</a:ObjectID>
<a:Name>prenom</a:Name>
<a:Code>prenom</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o237">
<a:ObjectID>F34DF1B5-A53E-4092-9660-A75C834B5DDE</a:ObjectID>
<a:Name>email</a:Name>
<a:Code>email</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o238">
<a:ObjectID>15F13E62-E548-459E-AA46-F9BAC05DAA53</a:ObjectID>
<a:Name>numTel</a:Name>
<a:Code>numTel</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>long</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o239">
<a:ObjectID>E2ABD88C-E0B6-4208-8B66-D38AC8013BDE</a:ObjectID>
<a:Name>login</a:Name>
<a:Code>login</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o240">
<a:ObjectID>602CA60C-B966-4767-847B-46B25E6E16FD</a:ObjectID>
<a:Name>motDePasse</a:Name>
<a:Code>motDePasse</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o241">
<a:ObjectID>FDAE73FD-2D3A-48E0-B474-FFAD626BE531</a:ObjectID>
<a:Name>dateNaissance</a:Name>
<a:Code>dateNaissance</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>Date</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o242">
<a:ObjectID>297613C0-D61E-443A-BEA8-178BC137D7DB</a:ObjectID>
<a:Name>cne</a:Name>
<a:Code>cne</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o243">
<a:ObjectID>7164E473-43CE-4F98-800B-10D8FA6E5FF7</a:ObjectID>
<a:Name>cin</a:Name>
<a:Code>cin</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o244">
<a:ObjectID>8A0B3966-740E-4C15-9C04-68E003C5DADE</a:ObjectID>
<a:Name>formation</a:Name>
<a:Code>formation</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
<c:Operations>
<o:Operation Id="o245">
<a:ObjectID>A1466BDD-FFC2-4824-A61D-4F569555BBD6</a:ObjectID>
<a:Name>ConsulterProfil</a:Name>
<a:Code>consulterProfil</a:Code>
<a:CreationDate>1587568572</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568603</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
</c:Operations>
</o:Class>
<o:Class Id="o145">
<a:ObjectID>A056D9E9-7475-40F0-86F1-89E51A6F309C</a:ObjectID>
<a:Name>NoteGeneral</a:Name>
<a:Code>NoteGeneral</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o246">
<a:ObjectID>164D7B35-F4E5-40FC-BA39-A1532CFE6BD6</a:ObjectID>
<a:Name>id</a:Name>
<a:Code>id</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o247">
<a:ObjectID>BE242C4F-A3A1-4807-808A-654F54CA764E</a:ObjectID>
<a:Name>id_Etudiant</a:Name>
<a:Code>id_Etudiant</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o248">
<a:ObjectID>01C6EC1E-DBEF-4E70-A0DE-882AAE9AE6E6</a:ObjectID>
<a:Name>valeur</a:Name>
<a:Code>valeur</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>double</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o146">
<a:ObjectID>7C727D26-CFAF-44AA-B03E-BCD27FF5B150</a:ObjectID>
<a:Name>SoumissionSFE</a:Name>
<a:Code>SoumissionSFE</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506558</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o249">
<a:ObjectID>4162F9D0-383E-412A-B857-64ABD230A629</a:ObjectID>
<a:Name>id</a:Name>
<a:Code>id</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o250">
<a:ObjectID>EE93A5F2-756C-47CC-B11F-45B5B7F26855</a:ObjectID>
<a:Name>id_tudiant</a:Name>
<a:Code>id_tudiant</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o251">
<a:ObjectID>806902F1-950A-4610-8258-8AB6AD180765</a:ObjectID>
<a:Name>titre_Sujet</a:Name>
<a:Code>titre_Sujet</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o252">
<a:ObjectID>B4B7A623-433C-4616-8871-8CDC6B50A82A</a:ObjectID>
<a:Name>nom_Societe</a:Name>
<a:Code>nom_Societe</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o253">
<a:ObjectID>76178D36-A49C-40A9-851F-2949DD1B7D7E</a:ObjectID>
<a:Name>adresse_Societe</a:Name>
<a:Code>adresse_Societe</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o254">
<a:ObjectID>B6FF9709-D866-4535-8482-9AE075E78527</a:ObjectID>
<a:Name>tel_Societe</a:Name>
<a:Code>tel_Societe</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>long</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o255">
<a:ObjectID>44BC85C1-C1DA-43ED-A5D8-5417CA7C09F1</a:ObjectID>
<a:Name>email_Societe</a:Name>
<a:Code>email_Societe</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o256">
<a:ObjectID>BCC3BD5A-3C1B-40A7-91C0-FDDC0BFDE598</a:ObjectID>
<a:Name>validation</a:Name>
<a:Code>validation</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>boolean</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o147">
<a:ObjectID>BA8F926C-5472-4ABD-91EC-0E5F5FCE2BAA</a:ObjectID>
<a:Name>Tache</a:Name>
<a:Code>Tache</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o257">
<a:ObjectID>7FDADD78-F109-47F8-B984-41BBDA7E3192</a:ObjectID>
<a:Name>id</a:Name>
<a:Code>id</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o258">
<a:ObjectID>BE7D5215-B664-40E2-B084-97AF9D5F904C</a:ObjectID>
<a:Name>id_Projet</a:Name>
<a:Code>id_Projet</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o259">
<a:ObjectID>46A3E013-FF81-47BF-8E26-C00EB2216622</a:ObjectID>
<a:Name>titre</a:Name>
<a:Code>titre</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o260">
<a:ObjectID>EE0A0184-FC70-429A-9953-B7B261DBEAF3</a:ObjectID>
<a:Name>description</a:Name>
<a:Code>description</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o261">
<a:ObjectID>B711E72D-33E9-427B-A8DC-72D15C3BE717</a:ObjectID>
<a:Name>date_Debut</a:Name>
<a:Code>date_Debut</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>Date</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o262">
<a:ObjectID>E68D65B1-6EB1-46BB-AF05-7833671DBC97</a:ObjectID>
<a:Name>date_Fin</a:Name>
<a:Code>date_Fin</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>Date</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o263">
<a:ObjectID>ED262074-702B-4829-90B2-B7B9F27C9179</a:ObjectID>
<a:Name>commentaire</a:Name>
<a:Code>commentaire</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o264">
<a:ObjectID>C52FEB9F-C33D-41F0-8023-7283A387F676</a:ObjectID>
<a:Name>document</a:Name>
<a:Code>document</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o148">
<a:ObjectID>8D28C308-98B6-4727-82C8-0CE4E95A11A8</a:ObjectID>
<a:Name>PropositionPFE</a:Name>
<a:Code>PropositionPFE</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506604</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o265">
<a:ObjectID>EE67AF99-9014-4389-ACE0-F50CC546320B</a:ObjectID>
<a:Name>id</a:Name>
<a:Code>id</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o266">
<a:ObjectID>6D7BF112-D755-472B-A945-D27B3C33CF6F</a:ObjectID>
<a:Name>id_Encadrant</a:Name>
<a:Code>id_Encadrant</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o267">
<a:ObjectID>4AB222C9-E854-4A4F-BC61-2756F4BD663F</a:ObjectID>
<a:Name>titre</a:Name>
<a:Code>titre</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o268">
<a:ObjectID>BB8A720F-0D55-4365-ADB5-4E4914292B1C</a:ObjectID>
<a:Name>description</a:Name>
<a:Code>description</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o269">
<a:ObjectID>EAB4239E-CF6F-40ED-AE5B-9CF41BBEE0EB</a:ObjectID>
<a:Name>validation</a:Name>
<a:Code>validation</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>boolean</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o149">
<a:ObjectID>FBF90F9B-19E3-456F-AA44-7EF12FE2DC67</a:ObjectID>
<a:Name>Professeur</a:Name>
<a:Code>Professeur</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568688</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o270">
<a:ObjectID>144BA1CB-FD03-4CB5-86D8-6AF7CBD46A0F</a:ObjectID>
<a:Name>id</a:Name>
<a:Code>id</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o271">
<a:ObjectID>EF819E47-4B26-4D83-9E04-42CCF7E7F04D</a:ObjectID>
<a:Name>nom</a:Name>
<a:Code>nom</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o272">
<a:ObjectID>24BE9912-A8E2-47BD-9ADA-2AF85454EC81</a:ObjectID>
<a:Name>prenom</a:Name>
<a:Code>prenom</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o273">
<a:ObjectID>D27FF6D1-364C-4E5F-87E8-F1377B92E9ED</a:ObjectID>
<a:Name>numTel</a:Name>
<a:Code>numTel</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>long</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o274">
<a:ObjectID>4A782CC7-44B1-4D2C-81B6-1FE7AB0DDED1</a:ObjectID>
<a:Name>email</a:Name>
<a:Code>email</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o275">
<a:ObjectID>78E1FB32-040E-4BAF-84EB-60DF0B50C274</a:ObjectID>
<a:Name>departement</a:Name>
<a:Code>departement</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o276">
<a:ObjectID>3160F241-FB24-4B5F-8E1B-F59981F1E645</a:ObjectID>
<a:Name>login</a:Name>
<a:Code>login</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o277">
<a:ObjectID>D1629E8E-870B-41A9-AA2E-38A829A172BF</a:ObjectID>
<a:Name>motDePasse</a:Name>
<a:Code>motDePasse</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
<c:Operations>
<o:Operation Id="o278">
<a:ObjectID>95168D27-49B4-4ED6-96BB-185233D0D3A9</a:ObjectID>
<a:Name>CreeSeance</a:Name>
<a:Code>creeSeance</a:Code>
<a:CreationDate>1587568608</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568688</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
<o:Operation Id="o279">
<a:ObjectID>ABFD5FC1-49C6-4A41-B8AF-BC9825A26EC6</a:ObjectID>
<a:Name>GererAbsence</a:Name>
<a:Code>gererAbsence</a:Code>
<a:CreationDate>1587568608</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568688</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:TemplateBody>%DefaultBody%</a:TemplateBody>
</o:Operation>
</c:Operations>
</o:Class>
<o:Class Id="o150">
<a:ObjectID>47048139-ED5B-42F7-8646-2F8D2402472A</a:ObjectID>
<a:Name>Projet</a:Name>
<a:Code>Projet</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o280">
<a:ObjectID>AA4C7EF1-52BF-4AEB-A395-C7B9E878987B</a:ObjectID>
<a:Name>id</a:Name>
<a:Code>id</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o281">
<a:ObjectID>4AD9DD49-B53A-46DB-8AD2-8BEE08A68593</a:ObjectID>
<a:Name>titre</a:Name>
<a:Code>titre</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o282">
<a:ObjectID>03FFB33F-EEFF-43B1-9EC6-4B68A7F75095</a:ObjectID>
<a:Name>description</a:Name>
<a:Code>description</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o283">
<a:ObjectID>17D79444-71A6-42B4-A368-E1097BBC0297</a:ObjectID>
<a:Name>id_Etudiant</a:Name>
<a:Code>id_Etudiant</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o284">
<a:ObjectID>2754F6DF-58FD-4FF7-8A06-06C9FF50D258</a:ObjectID>
<a:Name>id_Encadrant</a:Name>
<a:Code>id_Encadrant</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o285">
<a:ObjectID>98D2851E-7CB7-4ECC-8DCF-A2C0E8FDBA16</a:ObjectID>
<a:Name>date_Debut</a:Name>
<a:Code>date_Debut</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>Date</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o286">
<a:ObjectID>C1581EE4-4C6A-4D70-BF7D-B3A2B1CFCA06</a:ObjectID>
<a:Name>date_Fin</a:Name>
<a:Code>date_Fin</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>Date</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o287">
<a:ObjectID>C7B3B15B-EA49-4407-BB08-07F32CBB6C0B</a:ObjectID>
<a:Name>commentaire</a:Name>
<a:Code>commentaire</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o288">
<a:ObjectID>3A7ABAD7-A735-4F5F-8AED-E3C6109D0DB4</a:ObjectID>
<a:Name>document</a:Name>
<a:Code>document</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o151">
<a:ObjectID>54799314-30DE-42DA-8C37-B00E9E2FA726</a:ObjectID>
<a:Name>Formation</a:Name>
<a:Code>Formation</a:Code>
<a:CreationDate>1587507090</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507343</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o289">
<a:ObjectID>F102E862-B7D2-4DCE-995B-7755925A5789</a:ObjectID>
<a:Name>id</a:Name>
<a:Code>id</a:Code>
<a:CreationDate>1587507133</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507343</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o290">
<a:ObjectID>E87CC91B-D6D3-40F8-898A-75CD4D887C38</a:ObjectID>
<a:Name>nom</a:Name>
<a:Code>nom</a:Code>
<a:CreationDate>1587507133</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507343</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o291">
<a:ObjectID>BAB2FF1C-4A05-4212-AD9B-DE4607F0A086</a:ObjectID>
<a:Name>id_cycle</a:Name>
<a:Code>idCycle</a:Code>
<a:CreationDate>1587507133</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507343</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o292">
<a:ObjectID>72CE8ED5-AD36-4D73-AA62-8136DFE5B296</a:ObjectID>
<a:Name>description</a:Name>
<a:Code>description</a:Code>
<a:CreationDate>1587507133</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507343</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o293">
<a:ObjectID>28419504-C869-4C4A-B371-0429A332C04E</a:ObjectID>
<a:Name>condition</a:Name>
<a:Code>condition</a:Code>
<a:CreationDate>1587507133</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507343</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o294">
<a:ObjectID>F589C0C9-AA21-4AC0-8D31-54594990DE4B</a:ObjectID>
<a:Name>debouches</a:Name>
<a:Code>debouches</a:Code>
<a:CreationDate>1587507133</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507343</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o295">
<a:ObjectID>8D55050F-9E02-4D54-ADB3-D6C148C498E8</a:ObjectID>
<a:Name>NbrEtudiants</a:Name>
<a:Code>nbrEtudiants</a:Code>
<a:CreationDate>1587507133</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507343</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o296">
<a:ObjectID>EBBD9027-627A-4677-9160-755800ED9B3A</a:ObjectID>
<a:Name>cout</a:Name>
<a:Code>cout</a:Code>
<a:CreationDate>1587507133</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507343</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o297">
<a:ObjectID>39B79F80-1EE4-4C97-9BD2-2B63440528CF</a:ObjectID>
<a:Name>peroideValide</a:Name>
<a:Code>peroideValide</a:Code>
<a:CreationDate>1587507133</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507343</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o298">
<a:ObjectID>0B3601A9-4612-4019-9275-8786845CABA3</a:ObjectID>
<a:Name>date_demande</a:Name>
<a:Code>dateDemande</a:Code>
<a:CreationDate>1587507133</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507343</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>Date</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o152">
<a:ObjectID>E2906B61-22DF-40E2-8A65-BE60F6F3F756</a:ObjectID>
<a:Name>OffreProjet</a:Name>
<a:Code>OffreProjet</a:Code>
<a:CreationDate>1587507402</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507474</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o299">
<a:ObjectID>AF8E8E12-C5EF-4C0C-BC25-CC2A745B418D</a:ObjectID>
<a:Name>id</a:Name>
<a:Code>id</a:Code>
<a:CreationDate>1587507406</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507474</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o300">
<a:ObjectID>CA83EB66-F8C1-4849-86E0-9194026E6364</a:ObjectID>
<a:Name>type</a:Name>
<a:Code>type</a:Code>
<a:CreationDate>1587507406</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507474</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o301">
<a:ObjectID>42279F47-A170-40FC-9835-4220CA1CDC7B</a:ObjectID>
<a:Name>validation</a:Name>
<a:Code>validation</a:Code>
<a:CreationDate>1587507406</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507474</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>Boolean</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o302">
<a:ObjectID>ADD32894-915C-460D-B82C-80B267A1B433</a:ObjectID>
<a:Name>refus</a:Name>
<a:Code>refus</a:Code>
<a:CreationDate>1587507406</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507474</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>boolean</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o153">
<a:ObjectID>138CAEA6-B9B5-4922-9AE8-91390333DBAF</a:ObjectID>
<a:Name>Module</a:Name>
<a:Code>Module</a:Code>
<a:CreationDate>1587507498</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507732</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o303">
<a:ObjectID>665B6EC0-628B-469D-939D-7A81A11AE651</a:ObjectID>
<a:Name>id</a:Name>
<a:Code>id</a:Code>
<a:CreationDate>1587507504</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507732</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o304">
<a:ObjectID>374A8D6B-32E8-472A-998A-2D79FE931773</a:ObjectID>
<a:Name>nom</a:Name>
<a:Code>nom</a:Code>
<a:CreationDate>1587507504</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507732</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o305">
<a:ObjectID>6D2683C5-9C51-4473-B111-7B80BFD50AE7</a:ObjectID>
<a:Name>description</a:Name>
<a:Code>description</a:Code>
<a:CreationDate>1587507504</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507732</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o306">
<a:ObjectID>F2819D8A-C849-4979-B2FD-71101B733A9F</a:ObjectID>
<a:Name>prerequis</a:Name>
<a:Code>prerequis</a:Code>
<a:CreationDate>1587507504</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507732</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o307">
<a:ObjectID>CB739C41-3FED-47BF-8A78-1FF9B991155A</a:ObjectID>
<a:Name>NbrHeur</a:Name>
<a:Code>nbrHeur</a:Code>
<a:CreationDate>1587507504</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507732</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o154">
<a:ObjectID>B856B79B-750F-4583-A770-918630A2EF54</a:ObjectID>
<a:Name>Examinateur</a:Name>
<a:Code>Examinateur</a:Code>
<a:CreationDate>1587564824</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565835</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
</o:Class>
<o:Class Id="o155">
<a:ObjectID>027BDAA9-F372-4400-8631-A6489BF475CF</a:ObjectID>
<a:Name>Autre</a:Name>
<a:Code>Autre</a:Code>
<a:CreationDate>1587564968</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565055</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o308">
<a:ObjectID>BC7BA49A-DB28-43E2-81F0-EF27F82A767E</a:ObjectID>
<a:Name>id_autre</a:Name>
<a:Code>idAutre</a:Code>
<a:CreationDate>1587564973</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565055</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o309">
<a:ObjectID>51462FC4-272D-45A7-B9D6-D9CD2210466F</a:ObjectID>
<a:Name>email</a:Name>
<a:Code>email</a:Code>
<a:CreationDate>1587564973</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565055</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o310">
<a:ObjectID>E7BF6EF3-C501-4C2C-A27E-24C0CFA078E1</a:ObjectID>
<a:Name>motpasse</a:Name>
<a:Code>motpasse</a:Code>
<a:CreationDate>1587564973</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565055</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o311">
<a:ObjectID>C1BD8EF4-1ACC-4591-9E33-EA7D72CC7C76</a:ObjectID>
<a:Name>nom</a:Name>
<a:Code>nom</a:Code>
<a:CreationDate>1587564973</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565055</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o312">
<a:ObjectID>6546E731-F9B2-49F4-A0C2-80DD5425379C</a:ObjectID>
<a:Name>prenom</a:Name>
<a:Code>prenom</a:Code>
<a:CreationDate>1587564973</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565055</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o156">
<a:ObjectID>FB0CEB8A-CF68-496C-8E77-ECAC0F26C4C4</a:ObjectID>
<a:Name>Reponse</a:Name>
<a:Code>Reponse</a:Code>
<a:CreationDate>1587565091</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565421</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o313">
<a:ObjectID>F0F0C1A1-5861-4104-A895-6C71A3A663C9</a:ObjectID>
<a:Name>reponse</a:Name>
<a:Code>reponse</a:Code>
<a:CreationDate>1587565097</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565118</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o157">
<a:ObjectID>6915AD02-FB1C-4A16-B098-338D4360D1BB</a:ObjectID>
<a:Name>Question</a:Name>
<a:Code>Question</a:Code>
<a:CreationDate>1587565093</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565421</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o314">
<a:ObjectID>FE6251A0-A4B5-4089-8464-5681F60C409B</a:ObjectID>
<a:Name>délia</a:Name>
<a:Code>delia</a:Code>
<a:CreationDate>1587565150</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565200</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>Double</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o315">
<a:ObjectID>7BFD7539-0BDF-4E67-905F-F2B3E8B1C3EE</a:ObjectID>
<a:Name>id_question</a:Name>
<a:Code>idQuestion</a:Code>
<a:CreationDate>1587565150</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565200</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o316">
<a:ObjectID>95AC2CF7-A983-4E11-BF6E-0216793D6524</a:ObjectID>
<a:Name>question</a:Name>
<a:Code>question</a:Code>
<a:CreationDate>1587565150</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565200</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o158">
<a:ObjectID>C31F39EF-EA0C-45FC-B883-FFDCF7B33125</a:ObjectID>
<a:Name>Exam</a:Name>
<a:Code>Exam</a:Code>
<a:CreationDate>1587565564</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565835</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o317">
<a:ObjectID>475A6688-0BD7-4260-AB1A-F29B5D47D707</a:ObjectID>
<a:Name>id_exam</a:Name>
<a:Code>idExam</a:Code>
<a:CreationDate>1587565580</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565650</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o318">
<a:ObjectID>3AEA13A8-50CB-4EDC-AED9-1BD9D21B0B29</a:ObjectID>
<a:Name>dateExam</a:Name>
<a:Code>dateExam</a:Code>
<a:CreationDate>1587565580</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565650</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>Date</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o319">
<a:ObjectID>5E2F29C2-0F4A-4116-AEA5-E609101A3951</a:ObjectID>
<a:Name>délaiExam</a:Name>
<a:Code>delaiExam</a:Code>
<a:CreationDate>1587565580</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565650</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>Double</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o320">
<a:ObjectID>E39B736C-BAE9-462F-B152-FBA82A99E6CC</a:ObjectID>
<a:Name>descriptio</a:Name>
<a:Code>descriptio</a:Code>
<a:CreationDate>1587565580</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565650</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o321">
<a:ObjectID>253A7667-B1CE-47AA-8FA5-093B617E75EB</a:ObjectID>
<a:Name>typeExam</a:Name>
<a:Code>typeExam</a:Code>
<a:CreationDate>1587565580</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565650</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o159">
<a:ObjectID>803D577F-7A99-48CD-A4D2-149514E8EA8B</a:ObjectID>
<a:Name>Resultat</a:Name>
<a:Code>Resultat</a:Code>
<a:CreationDate>1587565761</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565835</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o322">
<a:ObjectID>7EC11C0F-23A6-4EDE-99E2-5B14904129E9</a:ObjectID>
<a:Name>note</a:Name>
<a:Code>note</a:Code>
<a:CreationDate>1587565781</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565827</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>Double</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o160">
<a:ObjectID>DF8B3511-0CC0-4934-9291-7A34A491BB5D</a:ObjectID>
<a:Name>VraiFaux</a:Name>
<a:Code>VraiFaux</a:Code>
<a:CreationDate>1587565937</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565978</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o323">
<a:ObjectID>531A687D-CDB3-40D8-A2F9-AEFDE2751BA2</a:ObjectID>
<a:Name>reponse</a:Name>
<a:Code>reponse</a:Code>
<a:CreationDate>1587565943</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565978</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o161">
<a:ObjectID>9D0E7D8C-A4C7-4F17-9B18-65ED64AED94A</a:ObjectID>
<a:Name>QuestioMultiple</a:Name>
<a:Code>QuestioMultiple</a:Code>
<a:CreationDate>1587565938</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587566009</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o324">
<a:ObjectID>46DAA802-AD7D-47E1-834C-CDCEE988E066</a:ObjectID>
<a:Name>reponse</a:Name>
<a:Code>reponse</a:Code>
<a:CreationDate>1587565979</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587566009</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o162">
<a:ObjectID>871ACF52-AE0E-4FE2-9190-17658D95125C</a:ObjectID>
<a:Name>QuestionLibre</a:Name>
<a:Code>QuestionLibre</a:Code>
<a:CreationDate>1587565939</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587566034</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o325">
<a:ObjectID>B7AAB127-C9A9-443D-A075-144129250BEA</a:ObjectID>
<a:Name>reponse</a:Name>
<a:Code>reponse</a:Code>
<a:CreationDate>1587566015</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587566034</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o163">
<a:ObjectID>02F3D37D-CF96-41AB-9495-A591C2FEBAFA</a:ObjectID>
<a:Name>Absence</a:Name>
<a:Code>Absence</a:Code>
<a:CreationDate>1587566756</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587567000</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o326">
<a:ObjectID>478DCF02-738A-4850-AD29-117D976D9530</a:ObjectID>
<a:Name>id_Absc</a:Name>
<a:Code>idAbsc</a:Code>
<a:CreationDate>1587566761</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587567000</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o327">
<a:ObjectID>C9BB12C8-F431-4A11-8072-93FECF845D56</a:ObjectID>
<a:Name>date_debut</a:Name>
<a:Code>dateDebut</a:Code>
<a:CreationDate>1587566761</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587567000</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>Date</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o328">
<a:ObjectID>81675266-7F43-439B-8ED8-49C8BE67CECD</a:ObjectID>
<a:Name>date_fin</a:Name>
<a:Code>dateFin</a:Code>
<a:CreationDate>1587566761</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587567000</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>Date</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
<o:Class Id="o164">
<a:ObjectID>E624AB34-60FD-4AA0-9421-325A81B56961</a:ObjectID>
<a:Name>Seance</a:Name>
<a:Code>Seance</a:Code>
<a:CreationDate>1587566756</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587567068</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:UseParentNamespace>0</a:UseParentNamespace>
<c:Attributes>
<o:Attribute Id="o329">
<a:ObjectID>15E3DD2B-B49A-4EBC-B98D-90616131FD30</a:ObjectID>
<a:Name>id_Sc</a:Name>
<a:Code>idSc</a:Code>
<a:CreationDate>1587567003</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587567068</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>int</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o330">
<a:ObjectID>EFB60792-2BC2-4EC2-8BCA-2CA8DABEF286</a:ObjectID>
<a:Name>date_debut</a:Name>
<a:Code>dateDebut</a:Code>
<a:CreationDate>1587567003</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587567068</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>Date</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o331">
<a:ObjectID>B74A375B-4A31-4443-8B5F-80E70F656739</a:ObjectID>
<a:Name>date_fin</a:Name>
<a:Code>dateFin</a:Code>
<a:CreationDate>1587567003</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587567068</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>Date</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
<o:Attribute Id="o332">
<a:ObjectID>BB6C12CE-B593-4F73-8EC0-458128C0683A</a:ObjectID>
<a:Name>type_seance</a:Name>
<a:Code>typeSeance</a:Code>
<a:CreationDate>1587567003</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587567068</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:DataType>String</a:DataType>
<a:Attribute.Visibility>-</a:Attribute.Visibility>
</o:Attribute>
</c:Attributes>
</o:Class>
</c:Classes>
<c:Associations>
<o:Association Id="o21">
<a:ObjectID>82C31A22-2BC0-4D26-88A5-176DC6DDC025</a:ObjectID>
<a:Name>depose</a:Name>
<a:Code>depose</a:Code>
<a:CreationDate>1587040851</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587568388</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>1..1</a:RoleAMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,276={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,6=&lt;None&gt;
{78C31404-0EE5-4FD0-9038-EE396B305F05},roleBContainer,6=&lt;None&gt;

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o130"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o129"/>
</c:Object2>
</o:Association>
<o:Association Id="o25">
<a:ObjectID>B7A40C34-70BF-4B58-A416-B11D44445307</a:ObjectID>
<a:Name>Association_4</a:Name>
<a:Code>association4</a:Code>
<a:CreationDate>1587042569</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587042924</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:RoleAMultiplicity>1..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>1..*</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,224={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,17=java.util.HashSet

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o134"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o132"/>
</c:Object2>
</o:Association>
<o:Association Id="o28">
<a:ObjectID>11592277-CDD4-435C-92BD-52F4F30B5B6D</a:ObjectID>
<a:Name>suive</a:Name>
<a:Code>suive</a:Code>
<a:CreationDate>1587043298</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587506870</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>1..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>1..1</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,276={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,6=&lt;None&gt;
{78C31404-0EE5-4FD0-9038-EE396B305F05},roleBContainer,6=&lt;None&gt;

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o131"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o129"/>
</c:Object2>
</o:Association>
<o:Association Id="o31">
<a:ObjectID>FB5857E3-C1C2-4F8A-AEB0-462BED5F8219</a:ObjectID>
<a:Name>avoire</a:Name>
<a:Code>avoire</a:Code>
<a:CreationDate>1587053281</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587506821</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAIndicator>C</a:RoleAIndicator>
<a:RoleAMultiplicity>1..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>1..*</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,224={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,17=java.util.HashSet

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o133"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o134"/>
</c:Object2>
</o:Association>
<o:Association Id="o33">
<a:ObjectID>0222D24A-B051-4FA3-AEF5-8D3E5868EE54</a:ObjectID>
<a:Name>s&#39;appuie</a:Name>
<a:Code>s_appuie</a:Code>
<a:CreationDate>1587053352</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587506812</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAIndicator>C</a:RoleAIndicator>
<a:RoleAMultiplicity>1..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>1..*</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,224={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,17=java.util.HashSet

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o130"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o134"/>
</c:Object2>
</o:Association>
<o:Association Id="o36">
<a:ObjectID>53D58C66-6BF4-408C-92C7-009360D8A7D5</a:ObjectID>
<a:Name>concerne</a:Name>
<a:Code>concerne</a:Code>
<a:CreationDate>1587410994</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587506841</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>1..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>1..1</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,276={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,6=&lt;None&gt;
{78C31404-0EE5-4FD0-9038-EE396B305F05},roleBContainer,6=&lt;None&gt;

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o128"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o134"/>
</c:Object2>
</o:Association>
<o:Association Id="o40">
<a:ObjectID>F4CF1B3B-13DE-40A7-B705-34EC5F41F552</a:ObjectID>
<a:Name>Association_3</a:Name>
<a:Code>Association_3</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>1..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>1..*</a:RoleBMultiplicity>
<c:Object1>
<o:Class Ref="o144"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o149"/>
</c:Object2>
</o:Association>
<o:Association Id="o43">
<a:ObjectID>99691F5E-2610-44AF-8E1E-2BB7EA77FB64</a:ObjectID>
<a:Name>Association_4</a:Name>
<a:Code>Association_4</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>1..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>1..*</a:RoleBMultiplicity>
<c:Object1>
<o:Class Ref="o150"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o149"/>
</c:Object2>
</o:Association>
<o:Association Id="o46">
<a:ObjectID>A34B3F79-F1C7-4464-B25B-428666F45DC3</a:ObjectID>
<a:Name>Association_5</a:Name>
<a:Code>Association_5</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>1..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>1..1</a:RoleBMultiplicity>
<c:Object1>
<o:Class Ref="o145"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o144"/>
</c:Object2>
</o:Association>
<o:Association Id="o49">
<a:ObjectID>D4E8108A-942E-43B5-99EF-8CF3B62537D8</a:ObjectID>
<a:Name>Association_6</a:Name>
<a:Code>Association_6</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>1..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>1..*</a:RoleBMultiplicity>
<c:Object1>
<o:Class Ref="o147"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o150"/>
</c:Object2>
</o:Association>
<o:Association Id="o52">
<a:ObjectID>788291CC-C290-45A5-A03B-BB00EDA3435F</a:ObjectID>
<a:Name>Association_7</a:Name>
<a:Code>Association_7</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>1..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>1..1</a:RoleBMultiplicity>
<c:Object1>
<o:Class Ref="o146"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o144"/>
</c:Object2>
</o:Association>
<o:Association Id="o55">
<a:ObjectID>2E412D51-711A-4D49-8AC8-1DABBA101D34</a:ObjectID>
<a:Name>Association_8</a:Name>
<a:Code>Association_8</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>1..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>0..*</a:RoleBMultiplicity>
<c:Object1>
<o:Class Ref="o148"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o149"/>
</c:Object2>
</o:Association>
<o:Association Id="o57">
<a:ObjectID>31C80E34-394C-4FF3-A3F3-85B661307827</a:ObjectID>
<a:Name>Association_9</a:Name>
<a:Code>Association_9</a:Code>
<a:CreationDate>1587506458</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506458</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>1..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>1..1</a:RoleBMultiplicity>
<c:Object1>
<o:Class Ref="o150"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o144"/>
</c:Object2>
</o:Association>
<o:Association Id="o59">
<a:ObjectID>7717F17D-AE5E-4024-94C5-C09994A6C31E</a:ObjectID>
<a:Name>gérer</a:Name>
<a:Code>gerer</a:Code>
<a:CreationDate>1587506518</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587506558</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>0..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>0..*</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,224={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,17=java.util.HashSet

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o146"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o132"/>
</c:Object2>
</o:Association>
<o:Association Id="o61">
<a:ObjectID>9EC10BC5-1607-4C47-901D-8B010B64B630</a:ObjectID>
<a:Name>gérer</a:Name>
<a:Code>gerer</a:Code>
<a:CreationDate>1587506591</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568394</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,276={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,6=&lt;None&gt;
{78C31404-0EE5-4FD0-9038-EE396B305F05},roleBContainer,6=&lt;None&gt;

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o148"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o132"/>
</c:Object2>
</o:Association>
<o:Association Id="o64">
<a:ObjectID>92ED4136-7651-4D98-9316-53DC10987E14</a:ObjectID>
<a:Name>Association_17</a:Name>
<a:Code>association17</a:Code>
<a:CreationDate>1587507853</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568390</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleBMultiplicity>0..*</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,224={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,17=java.util.HashSet

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o152"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o132"/>
</c:Object2>
</o:Association>
<o:Association Id="o68">
<a:ObjectID>D53E3A80-6719-4AA8-BF90-A683A1BAD5BB</a:ObjectID>
<a:Name>Association_18</a:Name>
<a:Code>association18</a:Code>
<a:CreationDate>1587507902</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507902</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAIndicator>A</a:RoleAIndicator>
<a:RoleAMultiplicity>0..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>0..*</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,224={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,17=java.util.HashSet

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o151"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o153"/>
</c:Object2>
</o:Association>
<o:Association Id="o70">
<a:ObjectID>BEF4AC8A-52AB-4918-BEB3-2C3F69692B17</a:ObjectID>
<a:Name>Association_19</a:Name>
<a:Code>association19</a:Code>
<a:CreationDate>1587507948</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587507948</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>0..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>0..*</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,224={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,17=java.util.HashSet

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o151"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o149"/>
</c:Object2>
</o:Association>
<o:Association Id="o72">
<a:ObjectID>C4BA8ECA-9B9D-406F-A64A-FD1D7961A315</a:ObjectID>
<a:Name>Association_20</a:Name>
<a:Code>association20</a:Code>
<a:CreationDate>1587507991</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568723</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleBMultiplicity>0..*</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,224={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,17=java.util.HashSet

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o153"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o149"/>
</c:Object2>
</o:Association>
<o:Association Id="o74">
<a:ObjectID>34DE1527-B089-4B2F-91F5-A89C2A508C96</a:ObjectID>
<a:Name>Association_21</a:Name>
<a:Code>association21</a:Code>
<a:CreationDate>1587508052</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568344</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>0..1</a:RoleAMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,276={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,6=&lt;None&gt;
{78C31404-0EE5-4FD0-9038-EE396B305F05},roleBContainer,6=&lt;None&gt;

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o152"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o149"/>
</c:Object2>
</o:Association>
<o:Association Id="o80">
<a:ObjectID>C1E24CE7-29B7-4F9B-9E80-CA7A9177E2F1</a:ObjectID>
<a:Name>Association_22</a:Name>
<a:Code>association22</a:Code>
<a:CreationDate>1587565294</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587669202</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>0..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>0..*</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,224={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,17=java.util.HashSet

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o154"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o157"/>
</c:Object2>
</o:Association>
<o:Association Id="o86">
<a:ObjectID>5E81E66C-0DBA-420B-A671-B7ECED791305</a:ObjectID>
<a:Name>Association_24</a:Name>
<a:Code>association24</a:Code>
<a:CreationDate>1587565682</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565682</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAIndicator>C</a:RoleAIndicator>
<a:RoleAMultiplicity>0..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>0..*</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,224={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,17=java.util.HashSet

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o157"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o158"/>
</c:Object2>
</o:Association>
<o:Association Id="o88">
<a:ObjectID>C9C9B12E-87B1-459C-A28B-7D3776937D3E</a:ObjectID>
<a:Name>Association_25</a:Name>
<a:Code>association25</a:Code>
<a:CreationDate>1587565701</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587669202</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>0..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>0..*</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,224={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,17=java.util.HashSet

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o154"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o158"/>
</c:Object2>
</o:Association>
<o:Association Id="o102">
<a:ObjectID>BC055F5D-89F5-484D-9154-E1A751A07BFB</a:ObjectID>
<a:Name>Association_26</a:Name>
<a:Code>association26</a:Code>
<a:CreationDate>1587566103</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587566103</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>0..1</a:RoleAMultiplicity>
<a:RoleBMultiplicity>0..*</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,224={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,17=java.util.HashSet

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o149"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o158"/>
</c:Object2>
</o:Association>
<o:Association Id="o111">
<a:ObjectID>DAA940D6-8B60-4E39-8D46-3C9ACF0608EC</a:ObjectID>
<a:Name>Association_27</a:Name>
<a:Code>association27</a:Code>
<a:CreationDate>1587567129</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568270</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,276={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,6=&lt;None&gt;
{78C31404-0EE5-4FD0-9038-EE396B305F05},roleBContainer,6=&lt;None&gt;

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o164"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o163"/>
</c:Object2>
</o:Association>
<o:Association Id="o113">
<a:ObjectID>C7DC3C48-7607-46F8-9812-1C1D4F0DAD71</a:ObjectID>
<a:Name>Association_28</a:Name>
<a:Code>association28</a:Code>
<a:CreationDate>1587567199</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568356</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,276={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,6=&lt;None&gt;
{78C31404-0EE5-4FD0-9038-EE396B305F05},roleBContainer,6=&lt;None&gt;

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o163"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o144"/>
</c:Object2>
</o:Association>
<o:Association Id="o115">
<a:ObjectID>86D4F98C-17E2-4263-9002-96A220596999</a:ObjectID>
<a:Name>Association_29</a:Name>
<a:Code>association29</a:Code>
<a:CreationDate>1587567325</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568719</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,276={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,6=&lt;None&gt;
{78C31404-0EE5-4FD0-9038-EE396B305F05},roleBContainer,6=&lt;None&gt;

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o164"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o149"/>
</c:Object2>
</o:Association>
<o:Association Id="o117">
<a:ObjectID>E31E6E6D-1F67-434C-B73D-51DB7074FF1A</a:ObjectID>
<a:Name>Association_30</a:Name>
<a:Code>association30</a:Code>
<a:CreationDate>1587567387</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568729</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleBMultiplicity>0..*</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,224={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,17=java.util.HashSet

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o153"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o149"/>
</c:Object2>
</o:Association>
<o:Association Id="o119">
<a:ObjectID>294C7267-EC31-494E-90AF-EF6239F03771</a:ObjectID>
<a:Name>Association_31</a:Name>
<a:Code>association31</a:Code>
<a:CreationDate>1587567614</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568379</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleBMultiplicity>0..*</a:RoleBMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,224={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,17=java.util.HashSet

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o149"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o128"/>
</c:Object2>
</o:Association>
<o:Association Id="o121">
<a:ObjectID>2B72275A-9939-4377-9C08-E222AAA99150</a:ObjectID>
<a:Name>Association_32</a:Name>
<a:Code>association32</a:Code>
<a:CreationDate>1587567691</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568397</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAMultiplicity>0..1</a:RoleAMultiplicity>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,276={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,6=&lt;None&gt;
{78C31404-0EE5-4FD0-9038-EE396B305F05},roleBContainer,6=&lt;None&gt;

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o128"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o144"/>
</c:Object2>
</o:Association>
<o:Association Id="o123">
<a:ObjectID>05FABA34-5F90-4C5E-99C7-1BD30EA68B6D</a:ObjectID>
<a:Name>Association_33</a:Name>
<a:Code>association33</a:Code>
<a:CreationDate>1587567850</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568360</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,276={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,6=&lt;None&gt;
{78C31404-0EE5-4FD0-9038-EE396B305F05},roleBContainer,6=&lt;None&gt;

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o153"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o144"/>
</c:Object2>
</o:Association>
<o:Association Id="o125">
<a:ObjectID>978BAADF-4BC2-43D4-86FF-A26D08BEB55C</a:ObjectID>
<a:Name>Association_34</a:Name>
<a:Code>association34</a:Code>
<a:CreationDate>1587567977</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568375</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:RoleAIndicator>A</a:RoleAIndicator>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,276={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,6=&lt;None&gt;
{78C31404-0EE5-4FD0-9038-EE396B305F05},roleBContainer,6=&lt;None&gt;

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o153"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o128"/>
</c:Object2>
</o:Association>
<o:Association Id="o127">
<a:ObjectID>61ADF608-95F1-44C0-9B4F-F38F162F7FD0</a:ObjectID>
<a:Name>Association_35</a:Name>
<a:Code>association35</a:Code>
<a:CreationDate>1587568039</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587568200</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<a:ExtendedAttributesText>{0DEDDB90-46E2-45A0-886E-411709DA0DC9},Java,276={72FA5C48-5524-4DF7-8187-ABB19AB5AF9E},roleAContainer,6=&lt;None&gt;
{F6FFC71C-C472-4261-A710-B0BCC0BF4D58},roleAImplementationClass,6=&lt;None&gt;
{C11C9F66-6453-43A2-8824-6654518CF65A},roleBImplementationClass,6=&lt;None&gt;
{78C31404-0EE5-4FD0-9038-EE396B305F05},roleBContainer,6=&lt;None&gt;

</a:ExtendedAttributesText>
<c:Object1>
<o:Class Ref="o128"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o132"/>
</c:Object2>
</o:Association>
</c:Associations>
<c:Generalizations>
<o:Generalization Id="o77">
<a:ObjectID>1152CDFD-3320-4CD1-9787-611A0754D0AD</a:ObjectID>
<a:Name>Generalisation_1</a:Name>
<a:Code>Generalisation_1</a:Code>
<a:CreationDate>1587565256</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565256</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<c:Object1>
<o:Class Ref="o154"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o144"/>
</c:Object2>
</o:Generalization>
<o:Generalization Id="o94">
<a:ObjectID>6B17066A-FB52-4D00-BBDB-4A8C80355105</a:ObjectID>
<a:Name>Generalisation_2</a:Name>
<a:Code>Generalisation_2</a:Code>
<a:CreationDate>1587566061</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587566061</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<c:Object1>
<o:Class Ref="o160"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o157"/>
</c:Object2>
</o:Generalization>
<o:Generalization Id="o97">
<a:ObjectID>9DB0AC70-9ADD-472D-97E3-96EE818ECB7F</a:ObjectID>
<a:Name>Generalisation_3</a:Name>
<a:Code>Generalisation_3</a:Code>
<a:CreationDate>1587566063</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587566063</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<c:Object1>
<o:Class Ref="o161"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o157"/>
</c:Object2>
</o:Generalization>
<o:Generalization Id="o100">
<a:ObjectID>81974A1C-1D50-4B10-8886-89AAA13D0651</a:ObjectID>
<a:Name>Generalisation_4</a:Name>
<a:Code>Generalisation_4</a:Code>
<a:CreationDate>1587566065</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587566065</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<c:Object1>
<o:Class Ref="o162"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o157"/>
</c:Object2>
</o:Generalization>
<o:Generalization Id="o105">
<a:ObjectID>16D8CCFB-73A0-4A2E-AF05-088BBB5AB025</a:ObjectID>
<a:Name>Generalisation_5</a:Name>
<a:Code>Generalisation_5</a:Code>
<a:CreationDate>1587566199</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587566199</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<c:Object1>
<o:Class Ref="o154"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o155"/>
</c:Object2>
</o:Generalization>
<o:Generalization Id="o107">
<a:ObjectID>09167887-F668-479E-ADA4-07E672D9C18B</a:ObjectID>
<a:Name>Generalisation_6</a:Name>
<a:Code>Generalisation_6</a:Code>
<a:CreationDate>1587566260</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587566260</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<c:Object1>
<o:Class Ref="o154"/>
</c:Object1>
<c:Object2>
<o:Class Ref="o129"/>
</c:Object2>
</o:Generalization>
</c:Generalizations>
<c:AssociationClassLinks>
<o:AssociationClassLink Id="o83">
<a:ObjectID>71A4BED8-D043-4AB9-8FB3-54C3F05888D9</a:ObjectID>
<a:CreationDate>1587565392</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565421</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<c:Object1>
<o:Class Ref="o156"/>
</c:Object1>
<c:Object2>
<o:Association Ref="o80"/>
</c:Object2>
</o:AssociationClassLink>
<o:AssociationClassLink Id="o91">
<a:ObjectID>E26F9104-1FD8-459C-9F5B-A7ECA444C318</a:ObjectID>
<a:CreationDate>1587565829</a:CreationDate>
<a:Creator>Khalid Zennou</a:Creator>
<a:ModificationDate>1587565835</a:ModificationDate>
<a:Modifier>Khalid Zennou</a:Modifier>
<c:Object1>
<o:Class Ref="o159"/>
</c:Object1>
<c:Object2>
<o:Association Ref="o88"/>
</c:Object2>
</o:AssociationClassLink>
</c:AssociationClassLinks>
<c:TargetModels>
<o:TargetModel Id="o333">
<a:ObjectID>19FC9047-410A-4EA7-B386-587BEA6F6146</a:ObjectID>
<a:Name>Java</a:Name>
<a:Code>Java</a:Code>
<a:CreationDate>1587040849</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040849</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TargetModelURL>file:///%_OBJLANG%/java5-j2ee14.xol</a:TargetModelURL>
<a:TargetModelID>0DEDDB90-46E2-45A0-886E-411709DA0DC9</a:TargetModelID>
<a:TargetModelClassID>1811206C-1A4B-11D1-83D9-444553540000</a:TargetModelClassID>
<c:SessionShortcuts>
<o:Shortcut Ref="o3"/>
</c:SessionShortcuts>
</o:TargetModel>
<o:TargetModel Id="o334">
<a:ObjectID>B0D017BA-66F9-40AF-B1F0-23CB3C155BD2</a:ObjectID>
<a:Name>WSDL for Java</a:Name>
<a:Code>WSDLJava</a:Code>
<a:CreationDate>1587040850</a:CreationDate>
<a:Creator>User</a:Creator>
<a:ModificationDate>1587040850</a:ModificationDate>
<a:Modifier>User</a:Modifier>
<a:TargetModelURL>file:///%_XEM%/WSDLJ2EE.xem</a:TargetModelURL>
<a:TargetModelID>C8F5F7B2-CF9D-4E98-8301-959BB6E86C8A</a:TargetModelID>
<a:TargetModelClassID>186C8AC3-D3DC-11D3-881C-00508B03C75C</a:TargetModelClassID>
<c:SessionShortcuts>
<o:Shortcut Ref="o4"/>
</c:SessionShortcuts>
</o:TargetModel>
</c:TargetModels>
</o:Model>
</c:Children>
</o:RootObject>

</Model>
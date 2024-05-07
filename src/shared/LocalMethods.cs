using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using EmailSender_Outlook;

namespace QuickStart
{
    public class LocalMethods
    {
        public async Task<object> CreateOutlook(dynamic input)
        {
            var toEmail = input.toEmail;
            var body = input.body;
            var subject = input.subject;
            var ccEmail = input.ccEmail;
            var bccEmail = input.bccEmail;
            var attachment = input.attachment;
            
            Console.WriteLine(toEmail);
            Console.WriteLine(body);
            Console.WriteLine(subject);
            Console.WriteLine(ccEmail);
            Console.WriteLine(attachment);
            Console.WriteLine(bccEmail);

            List<string> filePaths = new List<string>
            {
                attachment,
            };

            var emailSender = new EmailSender();
            emailSender.SendEmail(subject, body, toEmail, ccEmail, bccEmail, filePaths);

            return "CREATING EMAIL...";
        }
    }
}
